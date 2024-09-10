import { Module } from '@nestjs/common';
import { produtoController } from './produto.controller';
import { produtoService } from './produto.service';
import { produtoRepository } from './produto.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [produtoController],
  providers: [produtoService, produtoRepository, PrismaService]
})
export class produtoModule {}
