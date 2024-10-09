import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { clienteService } from './cliente.service';


@Controller('cliente')
export class clienteController {
    constructor(private service: clienteService) { }

    @Post('/cadastro')
    async createcliente(@Body() body: any) {
        return await this.service.createcliente(body)
    }

    @Get('findMany')
    async findclientes() {
        return await this.service.findclientes()
    }

    @Get(':id')
    async findcliente(@Param('id') id: string) {
        return await this.service.findcliente(id)
    }

    @Put()
    async updatecliente(@Body() body: any) {
        return await this.service.updatecliente(body)
    }
}