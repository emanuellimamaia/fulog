import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateMaintenanceDto {



  @ApiProperty()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsNotEmpty()
  value: number

  @ApiProperty()
  @IsNotEmpty()
  date: Date
}