import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';

import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlbumsService } from './albums.service';
import { ViewComponent } from './view/view.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ListComponent, ViewComponent],
  imports: [AlbumsRoutingModule, SharedModule, MatDialogModule],
  providers: [AlbumsService],
})
export class AlbumsModule {}
