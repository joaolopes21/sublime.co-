import { Injectable } from '@nestjs/common';
import { clienteRepository } from './cliente.repository';
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

    async updatecliente(body: any){
        return await this.repository.updatecliente(body)
    }
}
