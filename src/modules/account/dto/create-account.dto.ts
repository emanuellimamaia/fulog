import { DEFAULT_FACTORY_CLASS_METHOD_KEY } from "@nestjs/common/module-utils/constants";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAccountDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  role: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string



  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  company_id: string


}