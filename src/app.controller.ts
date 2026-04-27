import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './service/user.service';
import { Usuario } from './Entities/usuario.entity';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) { }

  // Rota para cadastrar um usuário novo
  @Post('cadastrar')
  cadastrarUsuario(@Body() dadosUsuario: Usuario) {
    return this.userService.cadastrarUsuario(dadosUsuario);
  }

  @Post('login')
  login(@Body() dadosLogin: Usuario) {
    return this.userService.login(dadosLogin);
  }
}
