import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGenreDto {
  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({ message: 'name is required' })
  name: string;
}
