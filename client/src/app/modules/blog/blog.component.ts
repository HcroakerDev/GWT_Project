import { Component, OnInit, OnDestroy, Inject } from '@angular/core'
import { BlogService } from '@app/core';

import { AddPostComponent, Post } from '@app/shared';
import { MatDialog } from '@angular/material/dialog'
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  
  posts: Post[];
  limit: number = 3;
  total: number;

  constructor(
    private blogService: BlogService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getPosts(null);
  }

  /**
   * Function that opens the add post modal
   */
  openModal(){
    const dialogRef = this.dialog.open(AddPostComponent, {
      width: '80%',
    });

    // After it is closed, if there is a post that has been added, add it to the start of the list
    // Also if this causes > page limit size, pop from the end.
    dialogRef.afterClosed().subscribe((postAdded: Post)=>{
      if(postAdded){

        // If the page limit is already reached, remove from the end
        if(this.posts.length == this.limit){
          this.posts.pop();
        }

        // Add post to start
        this.posts.unshift(postAdded);
      }
    })
  }

  /**
   * Function to retrieve more posts when the page changes.
   * 
   * @param pageEvent - Event emmitted when the page changes
   * @returns void
   */
  getPosts(pageEvent: PageEvent): void{

    // Get the index
    let index = pageEvent ? pageEvent.pageIndex : 0;

    // Get the posts
    this.blogService.getPosts(index+1, this.limit).then((res)=>{
      // Get the total and posts
      this.total = res.total;
      this.posts = res.results;
      window.scrollTo(0,0);
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

}
