import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from './services';

// A core module which can hold things such as services shared accross the entire application
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BlogService
  ]
})
export class CoreModule { }
