import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsItemComponent } from './components/posts-item/posts-item.component';
import { SharedModule } from '@app/shared/shared.module';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [
    BlogComponent,
    PostsListComponent,
    PostsItemComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
