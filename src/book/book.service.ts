import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create(createBookDto);
    return this.bookRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  // Corrigir a assinatura para aceitar Book | null
  async findOne(id: number): Promise<Book | null> {
    return this.bookRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book | null> {
    await this.bookRepository.update(id, updateBookDto);
    return this.bookRepository.findOne({
      where: { id },
    });
  }

  async remove(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
