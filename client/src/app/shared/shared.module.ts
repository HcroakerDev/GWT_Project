import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './components/add-post/add-post.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SafeURLPipe } from './pipes/safe-url.pipe';

// A shared module that can be used in other modules that require share functionality
@NgModule({
  entryComponents:[
    AddPostComponent
  ],
  declarations: [
    AddPostComponent,
    SafeURLPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    AddPostComponent,
    SafeURLPipe,
    MaterialModule
  ]
})
export class SharedModule { }
