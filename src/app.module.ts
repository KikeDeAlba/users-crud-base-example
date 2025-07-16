import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FindAllUsersUsecase } from './app/use-cases/find-all-users.usecase';
import { UserRepository } from './app/repositories/user.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FindAllUsersUsecase, UserRepository],
})
export class AppModule {}
