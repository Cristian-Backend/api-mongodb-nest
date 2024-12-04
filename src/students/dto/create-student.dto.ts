import { IsString, IsOptional, IsIn, MaxLength, Min, IsInt } from 'class-validator';

// para validaciones 
export class CreateStudentDto {
  @IsString()
  @MaxLength(25) // maximo de 5 caracteres
  name: string;

  @IsInt()
  @Min(1)
  age: number;

  @IsOptional() // la propiedad es opcional
  @IsString()
  country: string;
}
