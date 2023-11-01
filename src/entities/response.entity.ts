interface ErrorResponse {
  message: string;
  errorCode?: number;
  title?: string;
}

export interface PostResponse {
  message: string;
}

export interface PageData<T> {
  page: number;
  pages: number;
  previous?: number;
  next?: number;
  data: T[];
}

export class AppResponse<T> {
  error?: ErrorResponse;
  data?: T;
  statusCode: number;

  constructor(statusCode: number, error?: ErrorResponse, data?: T) {
    this.data = data;
    this.error = error;
    this.statusCode = statusCode;
  }
}

export class AppPaginatedResponse<T> extends AppResponse<T[]> {
  page: number;
  pages: number;
  previous?: number;
  next?: number;

  constructor(
    page: number,
    pages: number,
    statusCode: number,
    previous?: number,
    next?: number,
    error?: ErrorResponse,
    data?: T[],
  ) {
    super(statusCode, error, data);
    this.page = page;
    this.pages = pages;
    this.previous = previous;
    this.next = next;
  }
}
