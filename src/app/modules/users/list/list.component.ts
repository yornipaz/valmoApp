import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../users.types';

@Component({
  selector: 'users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: User[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.users = this.route.snapshot.data['users'];
  }
}
