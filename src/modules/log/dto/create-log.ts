import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateLogDto {


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  companyId: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  vehicleId: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  accountId: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  initialKilometers: number

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  finalKilometers: number

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  delivered: boolean

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  notes?: string
}