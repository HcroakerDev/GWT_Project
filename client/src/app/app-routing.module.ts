import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazy loaded modules for increased efficiency
const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
