import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateVehicleDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  kilometers: number

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  model: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  brand: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  license_plate: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  year: number

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type_of_fuel: string

}