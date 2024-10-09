import { IsEmail, IsString } from 'class-validator';


export class CreateClienteDto {
    @IsEmail()
    email: String;

    @IsString()
    senha: String;

    @IsString()
    telefone: String;



}