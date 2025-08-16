type ErrorApiResponse = {
  error: any;
  data: null;
};

type OkApiResponse<T> = {
  error?: undefined;
  data: T;
};

export type ApiResponse<T> = ErrorApiResponse | OkApiResponse<T>;
