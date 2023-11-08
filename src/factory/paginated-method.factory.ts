import { BadRequestException, Provider, Scope } from '@nestjs/common';
import { PageData } from 'src/entities/response.entity';

async function paginatedMethodwrapper<T>(
  method: () => Promise<{ count: number; items?: T[] }>,
  page: number,
  limit: number,
): Promise<PageData<T>> {
  const lessThanOne = page <= 0 || limit <= 0;

  if (lessThanOne) {
    throw new BadRequestException('limit/page must be greater than 0');
  }

  const data = await method();
  const count = data.count;
  const items = data.items ?? [];

  const prev = page <= 1 ? null : page - 1;
  const pages = Math.ceil(count / limit);
  const next = page >= pages ? null : page + 1;

  return {
    data: items,
    page: page,
    pages: pages,
    previous: prev,
    next: next,
    count: count,
  };
}

export const PaginatedMethodProvider: Provider = {
  provide: 'PAGINATED_METHOD_WRAPPER',
  useValue: paginatedMethodwrapper,
  scope: Scope.REQUEST,
};
