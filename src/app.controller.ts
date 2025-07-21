import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserEntity } from './app/entities/user.entity';
import { FindAllUsersUsecase } from './app/use-cases/find-all-users.usecase';
import { CreateUserUseCase } from './app/use-cases/create-user-impl.usecase';
import { plainToClass } from '@nestjs/class-transformer';
import { validateSync } from '@nestjs/class-validator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly findAllUsersUserCase: FindAllUsersUsecase,
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getUsers() {
    return this.findAllUsersUserCase.execute();
  }

  @Post('/users')
  createUser(@Body() data: unknown) {
    const user = plainToClass(UserEntity, data);
    const errors = validateSync(user);

    if (errors.length !== 0) {
      const formattedErrors = errors.map((err) => {
        // @ts-expect-error error controlado
        const contraintValue = Object.values(err?.constraints)[0];

        return {
          key: err.property,
          message: contraintValue,
        };
      });

      throw new BadRequestException(formattedErrors);
    }

    return this.createUserUseCase.execute(user);
  }
}
