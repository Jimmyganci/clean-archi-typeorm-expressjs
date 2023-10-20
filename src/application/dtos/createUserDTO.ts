import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDTO {
  constructor(props: CreateUserDTO) {
    Object.assign(this, props);
  }
  @IsNotEmpty()
  @IsString()
  company_name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  company_email: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  manager_email: string;

  @IsNotEmpty()
  @IsString()
  manager_lastname: string;

  @IsNotEmpty()
  @IsString()
  manager_firstname: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  manager_phone: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string;

  @IsString()
  @IsOptional()
  role: string;
}
