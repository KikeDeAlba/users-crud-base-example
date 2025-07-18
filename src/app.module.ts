import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FindAllUsersUsecase } from './app/use-cases/find-all-users.usecase';
import { UserRepository } from './app/repositories/user.repository';
import { CreateUserUsecase } from './app/use-cases/create-user.usecase';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    FindAllUsersUsecase,
    UserRepository,
    CreateUserUsecase,
  ],
})
export class AppModule {}
