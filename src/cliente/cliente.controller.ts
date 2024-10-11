import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { clienteService } from './cliente.service';
import { CreateClienteDto } from './dtos/create-cliente.dto';
import { LoginDto } from './dtos/login.dto';


@Controller('cliente')
export class clienteController {
    constructor(private service: clienteService) { }

    @Post('cadastro')
    async createcliente(@Body() body: CreateClienteDto) {
        return await this.service.createcliente(body)
    }

    @Post('login')
  async login(@Body() body: LoginDto) {
    return await this.service.login(body);
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