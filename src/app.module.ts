import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { produtoModule } from './produto/produto.module';
import { ClienteModule } from './cliente/cliente.module';
import { EnderecoModule } from './endereco/endereco.module';
import { PedidoModule } from './pedido/pedido.module';
import { CategoriaModule } from './categoria/categoria.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';

@Module({
  imports: [produtoModule, ClienteModule, EnderecoModule, PedidoModule, CategoriaModule, FormaPagamentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
