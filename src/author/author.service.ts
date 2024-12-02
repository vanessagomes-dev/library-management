import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  // Método para buscar todos os autores
  async findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  // Método para criar um novo autor
  async create(authorData: Partial<Author>): Promise<Author> {
    const author = this.authorRepository.create(authorData);
    return this.authorRepository.save(author);
  }
}
