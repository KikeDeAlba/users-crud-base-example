import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FindAllUsersUsecase } from './app/use-cases/find-all-users.usecase';
import { UserRepositoryProvider } from './app/providers/user-repository.provider';
import { CreateUserUseCaseProvider } from './app/providers/create-user-use-case.provider';
import { ValidateTokenMiddleware } from './app/middlewares/validate-token.middleware';

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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateTokenMiddleware).forRoutes(AppController);
  }
}
