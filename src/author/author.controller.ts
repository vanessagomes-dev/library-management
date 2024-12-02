import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './author.entity';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  async findAll(): Promise<Author[]> {
    return this.authorService.findAll();
  }

  @Post()
  async createAuthor(@Body() authorData: Partial<Author>): Promise<Author> {
    return this.authorService.create(authorData);
  }
}
