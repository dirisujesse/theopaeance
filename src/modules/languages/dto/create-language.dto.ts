import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateLanguageDto {
  @IsString({ message: 'code should be a string' })
  @IsNotEmpty({ message: 'code should not be empty' })
  @Length(3, 3, { message: 'code has to be 3 characters in length' })
  code: string;

  @IsString({ message: 'name should be a string' })
  @IsNotEmpty({ message: 'name should not be empty' })
  name: string;
}
