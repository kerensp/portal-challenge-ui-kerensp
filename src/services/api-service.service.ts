export type RequestConfig = RequestInit & {
  params?: Record<string, any>;
  responseType?: 'json' | 'blob';
};

enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request(
    method: Method,
    path: string,
    config: RequestConfig = {}
  ) {
    const url = new URL(path.startsWith('http') ? path : this.baseUrl + path);
    if (config.params) {
      Object.entries(config.params).forEach(([key, value]) =>
        url.searchParams.append(key, String(value))
      );
    }

    const fetchConfig: RequestInit = {
      method,
      ...config,
    };

    if (config.body && !(config.body instanceof FormData)) {
      fetchConfig.body = JSON.stringify(config.body);
      fetchConfig.headers = {
        'Content-Type': 'application/json',
        ...(config.headers || {}),
      };
    }

    try {
      const response = await fetch(url.toString(), fetchConfig);

      if (!response.ok) {
        const errorData = await response.text();
        console.error('API Error:', { url: url.toString(), errorData });
        return { error: errorData, status: response.status };
      }

      let data;
      if (config.responseType === 'blob') {
        data = await response.blob();
      } else {
        data = await response.json();
      }

      return { data };
    } catch (error: any) {
      console.error('Network Error:', error);
      return {
        error: {
          message: 'Network error or server unavailable',
          details: error,
        },
      };
    }
  }

  get(path: string, params?: Record<string, any>, config?: RequestConfig) {
    return this.request(Method.GET, path, { params, ...config });
  }

  post(path: string, body?: any, config?: RequestConfig) {
    return this.request(Method.POST, path, { body, ...config });
  }

  put(path: string, body?: any, config?: RequestConfig) {
    return this.request(Method.PUT, path, { body, ...config });
  }

  patch(path: string, body?: any, config?: RequestConfig) {
    return this.request(Method.PATCH, path, { body, ...config });
  }

  delete(path: string, body?: any, config?: RequestConfig) {
    return this.request(Method.DELETE, path, { body, ...config });
  }
}

export const api = new ApiService('/constants');
