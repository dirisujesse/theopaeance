import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCountryDto {
  @IsString({ message: 'code should be a string' })
  @IsNotEmpty({ message: 'code should not be empty' })
  code: string;

  @IsString({ message: 'emoji should be a string' })
  @IsNotEmpty({ message: 'emoji should not be empty' })
  emoji: string;

  @IsString({ message: 'name should be a string' })
  @IsNotEmpty({ message: 'name should not be empty' })
  name: string;

  @IsString({ message: 'dial_code should be a string' })
  @IsNotEmpty({ message: 'dial_code should not be empty' })
  dial_code: string;
}
