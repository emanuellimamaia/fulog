import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCompanyDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  company_name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cnpj: string

  @ApiProperty({ required: false })
  @IsString()
  area?: string

}