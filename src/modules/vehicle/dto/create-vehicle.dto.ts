import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVehicleDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  kilometers: number

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
  @IsString()
  year: number

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type_of_fuel: string
}