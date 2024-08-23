import { HttpInterceptorFn } from '@angular/common/http';

export const corseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
