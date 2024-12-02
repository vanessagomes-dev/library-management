import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from './book.repository';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookRepository)
    private readonly bookRepository: BookRepository,
  ) {}

  // Método para listar todos os livros
  async findAll(): Promise<Book[]> {
    return this.bookRepository.find({ relations: ['author'] });
  }

  // Método para criar um novo livro
  async create(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }
}
