import { DEFAULT_FACTORY_CLASS_METHOD_KEY } from "@nestjs/common/module-utils/constants";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Roles } from "src/shared/core/types.enum";

export class CreateAccountDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string




}