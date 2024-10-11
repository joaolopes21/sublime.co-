import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class clienteRepository{
    constructor(private prisma: PrismaService){}

    async createcliente(body: any){
        return await this.prisma.cliente.create({
            data: body
        })
    }

    async findclientes(){
        return await this.prisma.cliente.findMany()
    }

    async findcliente(id: string){
        return await this.prisma.cliente.findUnique({
            where: {
                id: id
            }
        })
    }

    async updatecliente(id: string, body: any) {
        return await this.prisma.cliente.update({
          where: {
            id: id,
          },
          data: body,
        });
      }

    async findclienteEmail(email: string) {
        return await this.prisma.cliente.findUnique({
          where: {
            email: email,
          },
        });
      }
}


