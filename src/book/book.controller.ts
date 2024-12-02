import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // Endpoint para listar todos os livros
  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  // Endpoint para criar um novo livro
  @Post()
  async create(@Body() book: Book): Promise<Book> {
    return this.bookService.create(book);
  }
}
