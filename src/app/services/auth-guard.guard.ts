import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const login = localStorage.getItem('login') == 'true';
  if (login) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
