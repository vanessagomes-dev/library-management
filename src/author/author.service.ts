import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  // Criar um novo autor
  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = this.authorRepository.create(createAuthorDto);
    return await this.authorRepository.save(author);
  }

  // Obter todos os autores
  async findAll(): Promise<Author[]> {
    return await this.authorRepository.find();
  }

  // Obter um autor pelo ID
  async findOne(id: number): Promise<Author> {
    const author = await this.authorRepository.findOneBy({ id });
    if (!author) {
      throw new Error(`Author with ID ${id} not found`);
    }
    return author;
  }

  // Atualizar um autor
  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    await this.authorRepository.update(id, updateAuthorDto);
    return this.findOne(id);
  }

  // Remover um autor
  async remove(id: number): Promise<void> {
    await this.authorRepository.delete(id);
  }
}
