import { Module } from '@nestjs/common';
import { clienteController } from './cliente.controller';
import { clienteService } from './cliente.service';
import { clienteRepository } from './cliente.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [clienteController],
  providers: [clienteService, clienteRepository, PrismaService]
})
export class clienteModule {}
