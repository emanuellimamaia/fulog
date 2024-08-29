import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

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
  company_id: string


}