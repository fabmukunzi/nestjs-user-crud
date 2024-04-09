import { IsEmail, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  names: string;
  @IsEmail(null, { message: 'Email isrequired' })
  @IsNotEmpty()
  email: string;
  @IsNumber()
  @IsNotEmpty()
  phone: number;
  @IsString()
  @Min(8)
  password: string;
}
