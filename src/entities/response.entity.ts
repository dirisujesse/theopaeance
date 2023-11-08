import { Type } from "@nestjs/common";
import { ApiHideProperty, getSchemaPath } from "@nestjs/swagger";

export class PostResponse {
  message: string;
}

export class PageData<T> {
  page: number;
  pages: number;
  count: number;
  previous?: number;
  next?: number;
  data: T[];
}

export class AppResponse<T> {
  // @ApiHideProperty()
  data?: T;

  constructor(data?: T) {
    this.data = data;
  }
}

export class AppPaginatedResponse<T> extends AppResponse<T[]> {
  page: number;
  pages: number;
  count: number;
  previous?: number;
  next?: number;

  constructor(
    page: number,
    pages: number,
    previous?: number,
    next?: number,
    data?: T[],
  ) {
    super(data);
    this.page = page;
    this.pages = pages;
    this.previous = previous;
    this.next = next;
  }
}

// export function getSchema<T, K>(base: Type) {
//   return {
//     allOf: [
//       { $ref: getSchemaPath(base) },
//       {
//         properties: {
//           results: {
//             type: 'array',
//             items: { $ref: getSchemaPath(CatDto) },
//           },
//         },
//       },
//     ],
//   };
// }