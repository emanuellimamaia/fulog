import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsObject, IsString, ValidateNested } from "class-validator";
import { CreateAccountDto } from "src/modules/account/dto/create-account.dto";

export class CreateCompanyDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  company_name: string

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateAccountDto)
  user: CreateAccountDto


}