import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { produtoModule } from './produto/produto.module';
import { clienteModule } from './cliente/cliente.module';
import { EnderecoModule } from './endereco/endereco.module';
import { PedidoModule } from './pedido/pedido.module';
import { CategoriaModule } from './categoria/categoria.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';

@Module({
  imports: [produtoModule, clienteModule, EnderecoModule, PedidoModule, CategoriaModule, FormaPagamentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
