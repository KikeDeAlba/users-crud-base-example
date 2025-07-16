import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserEntity } from './app/entities/user.entity';
import { FindAllUsersUsecase } from './app/use-cases/find-all-users.usecase';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly findAllUsersUserCase: FindAllUsersUsecase,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getUsers(): UserEntity[] {
    return this.findAllUsersUserCase.execute();
  }
}
