import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '@app/core';
import { Post } from '@app/shared/models';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  // Categories. Lowercase so if a filters extension is built to the application, the categories and query can be kept consistent.
  categories: string[] = ["lifestyle", "travel", "video"];
  // Max Body length, used in template also
  bodyMaxLength: number = 1000;
  // Regex to check valid url
  urlExpression = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;

  // Create reactive form
  addPostForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    category: ['', Validators.required],
    subjectURL: [null, Validators.pattern(this.urlExpression)], // Ensure it is a secure url
    body: ['', [Validators.required, Validators.maxLength(this.bodyMaxLength)]] // Ensure body isnt over max length
  })

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    public dialogRef: MatDialogRef<AddPostComponent>
  ) { }

  ngOnInit() {
  }

  /**
   * Function that adds a post through the blog service
   */
  submitForm(): void{
    // Get post value and send
    let post: Post = this.addPostForm.value as Post;
    this.blogService.addPost(post).then((addedPost: Post)=>{
      // Close dialog and send new post as parameter
      this.dialogRef.close(addedPost);
    }).catch((err)=>{
      console.log(err);
    })
  }

}
