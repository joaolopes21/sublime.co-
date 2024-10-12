import { Body, Controller, Get, Param, Post, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { produtoService } from './produto.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';


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


    @Post('upload')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads', // Pasta onde a imagem será armazenada
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = extname(file.originalname);
        callback(null, `${uniqueSuffix}${ext}`);
      },
    }),
  }))

  async uploadProductImage(@UploadedFile() file: Express.Multer.File, @Body('id') id: string) {
    const imageUrl = `/uploads/${file.filename}`; // Caminho para a imagem salva
    await this.service.updateProductImage(id, imageUrl);
    return { imageUrl };
  }
}
