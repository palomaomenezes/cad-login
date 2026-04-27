import { Usuario } from '../Entities/usuario.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private usuarioRepository;
    private jwtService;
    constructor(usuarioRepository: Repository<Usuario>, jwtService: JwtService);
    cadastrarUsuario(dadosUsuario: Partial<Usuario>): Promise<Usuario>;
    login(dadosLogin: Partial<Usuario>): Promise<{
        mensagem: string;
        token: string;
    } | {
        mensagem: string;
        token?: undefined;
    }>;
}
