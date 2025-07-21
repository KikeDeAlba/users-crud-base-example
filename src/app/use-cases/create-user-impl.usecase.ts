import { IUseCase, IUserRepository } from '../definitions';
import { UserEntity } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';

export abstract class CreateUserUseCase implements IUseCase<UserEntity, void> {
  abstract execute(command: UserEntity): void;
}

@Injectable()
export class CreateUserImplUsecase implements CreateUserUseCase {
  constructor(private readonly repository: IUserRepository) {}

  execute(command: UserEntity) {
    return this.repository.create(command);
  }
}
