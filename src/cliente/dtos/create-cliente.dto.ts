import { IsEmail, IsString } from 'class-validator';


export class CreateClienteDto {

    @IsString()
    nome: String;


    @IsEmail()
    email: String;

    @IsString()
    senha: String;

    @IsString()
    telefone: String;



}