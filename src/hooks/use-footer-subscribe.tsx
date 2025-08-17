import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "./use-mutation";
import { subscribeTo } from '@/services/subscribe.service';
import { subscribeSchema } from '@/modules/common/schemas/subscribe.schema';

export const useFooterSubscribe = () => {
  const form = useForm<{ email: string }>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: { email: "" },
  });

  const mutation = useMutation(
    async (payload: { email: string }) => await subscribeTo(payload),
    {
      onSuccess: () => {
        form.reset();
      },
    }
  );

  return {
    ...form,
    data: mutation.data,
    error: mutation.error,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isIdle:
      !mutation.isLoading && !mutation.isSuccess && !mutation.isError,

    mutate: mutation.mutate,
    resetForm: form.reset,
    resetMutation: mutation.reset,

    onSubmit: form.handleSubmit(mutation.mutate),
  };
};
