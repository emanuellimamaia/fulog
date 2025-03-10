import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateFuelExpensesDto {

  @ApiProperty()
  @IsNotEmpty()
  date: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  liters: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price_per_liter: number

}