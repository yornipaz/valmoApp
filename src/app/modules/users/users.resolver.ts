import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from './users.types';
import { inject } from '@angular/core';
import { UsersService } from './users.service';
import { PostsService } from 'src/app/core/posts/posts.service';
import { filter } from 'rxjs';
import { Post } from '../../core/posts/posts.type';

export const usersResolver: ResolveFn<User[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(UsersService).getAll();
};
export const userResolver: ResolveFn<User> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const id = route.paramMap.get('id') as string;
  const user = inject(UsersService).getById(parseInt(id));
  const posts = inject(PostsService)
    .getAlls()
    .pipe(filter((p, i) => p[i].userId === parseInt(id)));
  return inject(UsersService).getById(parseInt(id));
};
export const userPostsResolver: ResolveFn<Post[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const id = route.paramMap.get('id') as string;

  return inject(PostsService)
    .getAlls()
    .pipe(filter((p, i) => p[i].userId === parseInt(id)));
};
