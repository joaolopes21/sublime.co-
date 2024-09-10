import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class produtoRepository{
    constructor(private prisma: PrismaService){}

    async createproduto(body: any){
        return await this.prisma.produto.create({
            data: body
        })
    }

    async findprodutos(){
        return await this.prisma.produto.findMany()
    }

    async findproduto(id: string){
        return await this.prisma.produto.findUnique({
            where: {
                id: id
            }
        })
    }

    async updateproduto(body: any){
        return await this.prisma.produto.update({
            where: {
                id: body.id
            },
            data: body
        })
    }

}


