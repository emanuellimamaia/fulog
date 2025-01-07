import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString, isString } from "class-validator";

export class ChangeStatusAccountDto {
  @ApiProperty()
  @IsBoolean({ message: 'O status deve ser um valor booleano.' })
  @IsNotEmpty()
  status: boolean;
}