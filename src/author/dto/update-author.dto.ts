import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateAuthorDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsDateString()
  readonly birthDate?: Date;
}
