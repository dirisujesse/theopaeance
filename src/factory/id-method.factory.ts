import {
  BadRequestException,
  NotFoundException,
  Provider,
  Scope,
} from '@nestjs/common';

async function idMethodwrapper<T>(
  method: () => Promise<T>,
  id: string | number,
): Promise<T> {
  if (id == null) throw new BadRequestException('id not provided');

  const data = await method();

  if (!data) {
    throw new NotFoundException();
  }

  return data;
}

export const IdMethodProvider: Provider = {
  provide: 'ID_METHOD_WRAPPER',
  useValue: idMethodwrapper,
  scope: Scope.REQUEST,
};
