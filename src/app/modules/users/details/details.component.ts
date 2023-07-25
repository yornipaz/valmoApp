import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../users.types';
import { Post } from 'src/app/core/posts/posts.type';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'users-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  user!: User;
  posts: Post[] = [];
  dataSource!: MatTableDataSource<Post>;
  displayedColumns: string[] = ['id', 'email', 'body', 'view'];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
    this.posts = this.route.snapshot.data['posts'];
    const posts = this.posts.filter((post) => post.userId === this.user.id);
    console.log(posts);
    this.dataSource = new MatTableDataSource(posts);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  viewUser(id: number) {}
}
