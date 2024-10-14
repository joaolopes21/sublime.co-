import { Controller, Post, Body } from '@nestjs/common';
import { PedidoService } from './pedido.service';


@Controller('pedidos')
export class PedidoController {
    constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  async createOrder(
    @Body() body: { userId: string, products: { productId: string, quantity: number }[] }
  ) {
    return this.pedidoService.createOrder(body.userId, body.products);
  }
}
