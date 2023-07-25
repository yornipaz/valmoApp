import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { of } from 'rxjs';

export const IdExistsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const activatedRoute = inject(ActivatedRoute);
  const id = parseInt(route.params['id'] as string);
  if (isNaN(id) || id <= 0) {
    router.navigate(['../'], { relativeTo: activatedRoute });
    return false;
  }
  return true;
};
