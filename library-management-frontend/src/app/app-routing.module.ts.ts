/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './author/author-list.component';
import { BooksComponent } from './book/book-list.component';

const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: 'books', component: BooksComponent },
  { path: '', redirectTo: '/authors', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
