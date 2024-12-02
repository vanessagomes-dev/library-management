import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './author/author.entity';
import { Book } from './book/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'library.sqlite',
      entities: [Author, Book],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Author, Book]),
  ],
})
export class AppModule {}
