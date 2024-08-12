import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";

@Module({
<<<<<<< HEAD
  exports: [PrismaService],
=======
  imports: [],
  controllers: [],
>>>>>>> main
  providers: [PrismaService],
})
export class DatabaseModule { }
