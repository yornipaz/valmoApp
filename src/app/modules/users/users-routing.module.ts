import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import {
  userPostsResolver,
  userResolver,
  usersResolver,
} from './users.resolver';
import { IdExistsGuard } from 'src/app/core/guars/id-exists.guard';

const routes: Routes = [
  { path: '', component: ListComponent, resolve: { users: usersResolver } },
  {
    path: ':id',
    component: DetailsComponent,
    resolve: { user: userResolver, posts: userPostsResolver },
    canActivate: [IdExistsGuard],
  },
  { path: '**', redirectTo: '/users' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
