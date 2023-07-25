import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { albumsResolver } from '../albums.resolver';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Photo } from '../albums.type';
import { AlbumsService } from '../albums.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'albums-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private _albumsService: AlbumsService,
    private dialog: MatDialog
  ) {}
  dataSource!: MatTableDataSource<Photo>;
  displayedColumns: string[] = ['id', 'albumId', 'name', 'view'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    const data = this.route.snapshot.data['albums'] as Photo[];
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  viewAlbum(id: number) {
    this._albumsService.getById(id).subscribe((album) => {
      this.dialog.open(ViewComponent, { data: album });
    });
  }
}
