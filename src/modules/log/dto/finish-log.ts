import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class FinishLogDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  final_kilometers: number

  @ApiProperty()
  @IsString()
  @IsOptional()
  notes: string

}