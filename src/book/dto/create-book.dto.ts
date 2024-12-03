import { IsString, IsDateString, IsInt } from 'class-validator';

export class CreateBookDto {
  @IsString()
  readonly title: string;

  @IsDateString()
  readonly publicationDate: Date;

  @IsInt()
  readonly authorId: number;

  constructor(title: string, publicationDate: Date, authorId: number) {
    this.title = title;
    this.publicationDate = publicationDate;
    this.authorId = authorId;
  }
}
