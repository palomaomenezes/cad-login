import { Injectable } from '@nestjs/common';
import { Usuario } from '../Entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class UserService {

    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
        private jwtService: JwtService,
    ) { }


    async cadastrarUsuario(dadosUsuario: Partial<Usuario>) {
        const novoUsuario =
            this.usuarioRepository.create(dadosUsuario);
        return await this.usuarioRepository.save(novoUsuario);
    }

    async login(dadosLogin: Partial<Usuario>) {
        const usuario = await this.usuarioRepository.findOne({
            where: {
                email: dadosLogin.email,
                senha: dadosLogin.senha,
            }
        })

        if (usuario) {
            const payload = {
                id: usuario.id,
                email: usuario.email,
            };

            const newToken = this.jwtService.sign(payload);
            return {
                mensagem: 'Login realizado com sucesso!',
                token: newToken,
            };
        } else {
            return { mensagem: 'Email ou senha inválidos!' };
        }
    }
}