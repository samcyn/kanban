import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from 'axios';

export default class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL?: string) {
    this.instance = axios.create({
      baseURL: baseURL || 'https://jsonplaceholder.typicode.com',
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleResponse = (response: AxiosResponse) => response;

  protected _handleError = (error: AxiosError): AxiosError => error;

  public getUri: AxiosInstance['getUri'] = (
    config?: AxiosRequestConfig | undefined
  ): string => this.instance.getUri(config);

  public request: AxiosInstance['request'] = <T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> => {
    return this.instance.request<T, R>(config);
  };

  public get: AxiosInstance['get'] = <T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<R> => {
    return this.instance.get<T, R>(url, config);
  };

  public delete: AxiosInstance['delete'] = <T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<R> => {
    return this.instance.delete<T, R>(url, config);
  };

  public head: AxiosInstance['head'] = <T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<R> => {
    return this.instance.head<T, R>(url, config);
  };

  public options: AxiosInstance['options'] = <T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<R> => {
    return this.instance.options<T, R>(url, config);
  };

  public post: AxiosInstance['post'] = <T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined
  ): Promise<R> => {
    return this.instance.post<T, R>(url, data, config);
  };

  public put: AxiosInstance['put'] = <T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined
  ): Promise<R> => {
    return this.instance.put<T, R>(url, data, config);
  };

  public patch: AxiosInstance['patch'] = <T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined
  ): Promise<R> => {
    return this.instance.patch<T, R>(url, data, config);
  };
}
