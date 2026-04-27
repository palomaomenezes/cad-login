import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UserService } from './service/user.service';
import { Usuario } from './Entities/usuario.entity';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'teste',
      database: 'cadlogin',
      entities: [Usuario],
      synchronize: false,
    }),

    TypeOrmModule.forFeature([Usuario]),
    JwtModule.register({
      secret: 'senha-secreta-token',
      signOptions: {
        expiresIn: '1h',
      }
    })
  ],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule { }
