import { UserService } from './service/user.service';
import { Usuario } from './Entities/usuario.entity';
export declare class AppController {
    private readonly userService;
    constructor(userService: UserService);
    cadastrarUsuario(dadosUsuario: Usuario): Promise<Usuario>;
    login(dadosLogin: Usuario): Promise<{
        mensagem: string;
        token: string;
    } | {
        mensagem: string;
        token?: undefined;
    }>;
}
