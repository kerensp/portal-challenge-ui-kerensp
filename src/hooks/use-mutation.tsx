"use client";
import { useReducer, useCallback } from "react";
import { mutate as swrMutate } from "swr";

interface MutationOptions<TData, TVariables> {
  onSuccess?: (data: TData, variables: TVariables) => void;
  onError?: (error: Error, variables: TVariables) => void;
  onSettled?: (data: TData | null, error: Error | null) => void;
  invalidateKeys?: string[];
}

interface MutationState<TData> {
  data: TData | null;
  error: Error | null;
  isLoading: boolean;
}

type MutationAction<TData> =
  | { type: "START" }
  | { type: "SUCCESS"; data: TData }
  | { type: "ERROR"; error: Error }
  | { type: "RESET" };

function mutationReducer<TData>(
  state: MutationState<TData>,
  action: MutationAction<TData>
): MutationState<TData> {
  switch (action.type) {
    case "START":
      return { ...state, isLoading: true, error: null };
    case "SUCCESS":
      return { data: action.data, error: null, isLoading: false };
    case "ERROR":
      return { ...state, error: action.error, isLoading: false };
    case "RESET":
      return { data: null, error: null, isLoading: false };
    default:
      return state;
  }
}

interface MutationResult<TData, TVariables> extends MutationState<TData> {
  mutate: (variables: TVariables) => void;
  mutateAsync: (variables: TVariables) => Promise<TData>;
  reset: () => void;
  isError: boolean;
  isSuccess: boolean;
}

export const useMutation = <TData = unknown, TVariables = void>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options: MutationOptions<TData, TVariables> = {}
): MutationResult<TData, TVariables> => {
  const [state, dispatch] = useReducer(mutationReducer<TData>, {
    data: null,
    error: null,
    isLoading: false,
  });

  const mutateAsync = useCallback(
    async (variables: TVariables): Promise<TData> => {
      dispatch({ type: "START" });

      try {
        const result = await mutationFn(variables);
        dispatch({ type: "SUCCESS", data: result });

        options.onSuccess?.(result, variables);

        if (options.invalidateKeys) {
          await Promise.all(options.invalidateKeys.map((key) => swrMutate(key)));
        }

        options.onSettled?.(result, null);

        return result;
      } catch (err: unknown) {
        const errorObj = err instanceof Error ? err : new Error(String(err));
        dispatch({ type: "ERROR", error: errorObj });

        options.onError?.(errorObj, variables);
        options.onSettled?.(null, errorObj);

        throw errorObj;
      }
    },
    [mutationFn, options]
  );

  const mutate = useCallback(
    (variables: TVariables) => {
      void mutateAsync(variables);
    },
    [mutateAsync]
  );

  const reset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  return {
    ...state,
    mutate,
    mutateAsync,
    reset,
    isError: !!state.error,
    isSuccess: !state.isLoading && !state.error && state.data !== null,
  };
};
