import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateLogDto {



  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  vehicleId: string


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  finalKilometers: number


  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  delivered?: boolean

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  notes?: string
}