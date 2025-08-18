type ErrorApiResponse = {
  error: unknown;
  data: null;
};

type OkApiResponse<T> = {
  error?: undefined;
  data: T;
};

export type ApiResponse<T> = ErrorApiResponse | OkApiResponse<T>;
