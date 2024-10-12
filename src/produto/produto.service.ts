import { Injectable } from '@nestjs/common';
import { produtoRepository } from './produto.repository';

@Injectable()
export class produtoService {
    prisma: any;
    constructor(private repository: produtoRepository){}

    async createproduto(body: any){
        return await this.repository.createproduto(body)
    }

    async findprodutos(){
        return await this.repository.findprodutos()
    }

    async findproduto(id: string){
        return await this.repository.findproduto(id)
    }

    async updateproduto(body: any){
        return await this.repository.updateproduto(body)
    }

    async updateProductImage(id: string, imageUrl: string) {
        return this.prisma.product.update({
          where: { id: id },
          data: { imageUrl },
        });
    }
}
