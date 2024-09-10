import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { produtoService } from './produto.service';


@Controller('produto')
export class produtoController {
    constructor(private service: produtoService){}

    @Post()
    async createproduto(@Body() body: any){
        return await this.service.createproduto(body)
    }

    @Get('findMany')
    async findprodutos(){
        return await this.service.findprodutos()
    }

    @Get(':id')
    async findproduto(@Param('id') id: string){
        return await this.service.findproduto(id)
    }

    @Put()
    async updateproduto(@Body()body: any){
        return await this.service.updateproduto(body)
    }
}
