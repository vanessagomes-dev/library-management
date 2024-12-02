export class CreateBookDto {
  readonly title: string;
  readonly publicationDate: Date;
  readonly authorId: number;

  constructor(title: string, publicationDate: Date, authorId: number) {
    this.title = title;
    this.publicationDate = publicationDate;
    this.authorId = authorId;
  }
}
