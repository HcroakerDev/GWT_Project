import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@app/shared';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  // List of posts to display
  @Input() posts: Post[];

  constructor() { }

  ngOnInit() {
  }

}
