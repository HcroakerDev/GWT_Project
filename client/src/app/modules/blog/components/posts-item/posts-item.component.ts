import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@app/shared';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.scss']
})
export class PostsItemComponent implements OnInit {


  // Post Input
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
