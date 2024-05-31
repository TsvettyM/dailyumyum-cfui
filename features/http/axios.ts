import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

interface IRequestInterceptors {
  "Accept-Language"?: number;
  // ADD MORE HEADERS HERE IF NEEDED AND THEN USE 'upsertHeader' method to add header;
}

class AxiosInstance {
  private static instance: AxiosInstance;
  private requestInterceptorsIds: IRequestInterceptors;

  private constructor() {
    axios.defaults.baseURL = "/api/v1";
    this.requestInterceptorsIds = {};
  }

  public static getInstance(): AxiosInstance {
    if (!AxiosInstance.instance) {
      this.instance = new AxiosInstance();
    }
    return AxiosInstance.instance;
  }

  private ejectInterceptor(headerKey: keyof IRequestInterceptors) {
    if (this.requestInterceptorsIds[headerKey] !== undefined) {
      axios.interceptors.request.eject(
        Number.parseInt(`${this.requestInterceptorsIds[headerKey]}`)
      );
    }
  }

  private parseError({ response }: AxiosError<any>) {
    return JSON.stringify({
      status: response?.status || 400,
      code: response?.data.code,
      message: response?.data.message,
      fieldErrors: response?.data.fieldErrors || [],
    });
  }

  private async makeRequest<T>(
    method: "get" | "post" | "put" | "patch" | "delete",
    params: [any, any, any]
  ): Promise<any> {
    return axios[method]<T>(...params)
      .then(({ data, status }) => {
        return { data, status };
      })
      .catch((error: AxiosError) => {
        const parsedError = this.parseError(error);
        throw parsedError;
      });
  }

  public get<Response = any>(endpoint: string, config?: AxiosRequestConfig) {
    return this.makeRequest<Response>("get", [
      endpoint,
      config,
    ] as any) as Promise<AxiosResponse<Response>>;
  }

  public post<Response = any>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return this.makeRequest<Response>("post", [
      endpoint,
      data,
      config,
    ]) as Promise<AxiosResponse<Response>>;
  }

  public put<Response = any>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return this.makeRequest<Response>("put", [
      endpoint,
      data,
      config,
    ]) as Promise<AxiosResponse<Response>>;
  }

  public patch<Response = any>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return this.makeRequest<Response>("patch", [
      endpoint,
      data,
      config,
    ]) as Promise<AxiosResponse<Response>>;
  }

  public delete<Response = any>(endpoint: string, config?: AxiosRequestConfig) {
    return this.makeRequest<Response>("delete", [
      endpoint,
      config,
    ] as any) as Promise<AxiosResponse<Response>>;
  }

  public upsertHeader(headerKey: keyof IRequestInterceptors, value: string) {
    this.ejectInterceptor(headerKey);

    //FIX any to AxiosRequestConfig
    const newInterceptorId = this.interceptors.request.use((request: any) => ({
      ...request,
      headers: { ...request.headers, ...{ [headerKey]: value } },
    }));

    this.requestInterceptorsIds[headerKey] = newInterceptorId;
  }

  public get interceptors() {
    return axios.interceptors;
  }
}

const axiosRequest = AxiosInstance.getInstance();

export default axiosRequest;
