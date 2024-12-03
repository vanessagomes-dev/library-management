import { IsString, IsDateString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  readonly name?: string;

  @IsDateString()
  readonly birthDate!: string;
}
