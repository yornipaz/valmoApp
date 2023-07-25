import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersService } from './users.service';
import { PostsService } from 'src/app/core/posts/posts.service';

@NgModule({
  declarations: [UsersComponent, ListComponent, DetailsComponent],
  imports: [SharedModule, UsersRoutingModule],
  providers: [UsersService, PostsService],
})
export class UsersModule {}
