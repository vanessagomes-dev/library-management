/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { AuthorService, Author } from '../../services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this.authorService.getAuthors().subscribe({
      next: (data) => (this.authors = data),
      error: (err) => console.error('Error fetching authors:', err),
    });
  }
}
