import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { clienteRepository } from './cliente.repository';
import { LoginDto } from './dtos/login.dto';
// teste
@Injectable()
export class clienteService {
    constructor(private repository: clienteRepository){}

    async createcliente(body: any){
        return await this.repository.createcliente(body)
    }

    async findclientes(){
        return await this.repository.findclientes()
    }

    async findcliente(id: string){
        return await this.repository.findcliente(id)
    }

    async updatecliente(id: string, body: any) {
        const cliente = await this.repository.findcliente(id);
        if (!cliente) {
          throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND);
        }
    
        return await this.repository.updatecliente(id, body);
      }

    async login(loginClienteDto: LoginDto) {
        const { email, senha } = loginClienteDto;
        const cliente = await this.repository.findclienteEmail(email);
    
        if (!cliente) {
          throw new HttpException('Cliente não encontrado', HttpStatus.UNAUTHORIZED);
        }
    
        if (cliente.senha !== senha) {
          throw new HttpException('Senha incorreta', HttpStatus.UNAUTHORIZED);
        }
    
        return { message: 'Login realizado com sucesso!', clienteId: cliente.id };
      }
}
