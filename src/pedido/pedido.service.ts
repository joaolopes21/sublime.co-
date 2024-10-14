import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PedidoService {
  constructor(private prisma: PrismaService) {}

  async createOrder(userId: string, products: { productId: string, quantity: number }[]) {
    let precoFinal = 0;

    // Cria o pedido com os itens
    const pedido = await this.prisma.pedido.create({
      data: {
        data_pedido: new Date(),
        userId: userId,
        preco_pedido: 0,  // Definimos como 0 inicialmente e depois atualizamos
        desconto: 0,
        preco_final: 0,
        pedidoItem: {
          create: products.map((p) => ({
            produto: { connect: { id: p.productId } },
            quantidade: p.quantity,
          })),
        },
      },
      include: {
        pedidoItem: {
          include: { produto: true },
        },
      },
    });

    // Calcula o total e atualiza o estoque
    for (const item of pedido.pedidoItem) {
      precoFinal += parseFloat(item.produto.price) * item.quantidade;

      // Atualiza o estoque do produto
      await this.prisma.produto.update({
        where: { id: item.produtoId },
        data: { estoque: item.produto.estoque - item.quantidade },
      });
    }

    // Atualiza o preço final do pedido
    await this.prisma.pedido.update({
      where: { id: pedido.id },
      data: { preco_pedido: precoFinal, preco_final: precoFinal },
    });

    return pedido;
  }
}

