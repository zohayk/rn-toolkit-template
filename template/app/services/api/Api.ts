import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise } from 'axios';
import baseConfig from 'config';

class ApiInstance {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: baseConfig.API_URI,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  setAuthToken(token: string): void {
    this.axiosInstance.defaults.headers['X-AUTH-TOKEN'] = token;
  }

  clearAuthToken(): void {
    delete this.axiosInstance.defaults.headers['X-AUTH-TOKEN'];
  }

  get<T>(url: string, params: object = {}, config: AxiosRequestConfig = {}): AxiosPromise<T> {
    return this.axiosInstance.get<T>(url, { params, ...config });
  }
  post<T>(url: string, data?: object, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.axiosInstance.post<T>(url, data, config);
  }
  put<T>(url: string, data?: object, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.axiosInstance.put<T>(url, data, config);
  }
  delete<T>(url: string, data: object, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.axiosInstance.delete<T>(url, { data, ...config });
  }
}

export const Api = new ApiInstance();
