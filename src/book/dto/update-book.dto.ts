/* eslint-disable prettier/prettier */
import { IsOptional, IsString, IsDateString, IsInt } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsDateString()
  publicationDate?: Date;

  @IsOptional()
  @IsInt()
  authorId?: number;
}
