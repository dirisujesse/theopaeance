import { HttpException, HttpStatus, Provider, Scope } from '@nestjs/common';

async function controllerMethodwrapper(
  method: () => Promise<any>,
  errorMessage?: string,
): Promise<any> {
  try {
    return await method();
  } catch (e) {
    if (e instanceof HttpException) {
      e.message = errorMessage ?? e.message;
      throw e;
    }
    throw new HttpException(`${errorMessage ?? e}`, HttpStatus.BAD_REQUEST, {
      cause: e,
    });
  }
}

export const ControllerMethodProvider: Provider = {
  provide: 'CONTROLLER_METHOD_WRAPPER',
  useValue: controllerMethodwrapper,
  scope: Scope.REQUEST,
};
