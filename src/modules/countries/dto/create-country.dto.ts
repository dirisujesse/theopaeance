import {
  IsString,
  IsNotEmpty
} from 'class-validator';

export class CreateCountryDto {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  emoji: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  dial_code: string;
}
