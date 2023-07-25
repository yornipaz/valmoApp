import { ResolveFn } from '@angular/router';
import { Photo } from './albums.type';
import { inject } from '@angular/core';
import { AlbumsService } from './albums.service';

export const albumsResolver: ResolveFn<Photo[]> = (route, state) => {
  return inject(AlbumsService).getAll();
};
