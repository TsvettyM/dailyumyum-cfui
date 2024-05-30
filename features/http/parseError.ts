import { AxiosError } from "axios";

type IHttpBackEndCode =
  | "NOT_FOUND"
  | "DUPLICATED"
  | "REQUIRED"
  | "REGEX_MISMATCH"
  | "INVALID_CODE"
  | "EXPIRED"
  | "NOT_VERIFIED"
  | "UNEXPECTED_ERROR";

interface IFieldError<T> {
  code: IHttpBackEndCode;
  field: keyof T;
  details: string;
}

export interface IHttpError {
  message: string;
}

interface IErrorContent<T> {
  code: IHttpBackEndCode;
  message: string;
  fieldErrors: IFieldError<T>[];
  status: number;
}

type Error = IHttpError | AxiosError<Omit<IErrorContent<any>, "status">>;

const getIsAxiosError = (
  error: Error
): error is AxiosError<Omit<IErrorContent<any>, "status">> => {
  return Object.keys(error).includes("response");
};

export function parseError<T>(error: Error): IErrorContent<T> {
  try {
    if (getIsAxiosError(error)) {
      return {
        status: error.response?.status,
        fieldErrors: error.response?.data.fieldErrors || [],
        message: error.response?.data.message,
        code: error.response?.data.code,
      } as IErrorContent<T>;
    }
    const throwError: IErrorContent<T> = JSON.parse(error.message);
    return throwError;
  } catch (error) {
    return {
      code: "UNEXPECTED_ERROR",
      fieldErrors: [],
      message: "No internet connection",
      status: 400,
    };
  }
}

export default parseError;
