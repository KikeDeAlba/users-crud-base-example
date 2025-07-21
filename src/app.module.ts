import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FindAllUsersUsecase } from './app/use-cases/find-all-users.usecase';
import { UserRepositoryProvider } from './app/providers/user-repository.provider';
import { CreateUserUseCaseProvider } from './app/providers/create-user-use-case.provider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    FindAllUsersUsecase,
    UserRepositoryProvider,
    CreateUserUseCaseProvider,
  ],
})
export class AppModule {}
