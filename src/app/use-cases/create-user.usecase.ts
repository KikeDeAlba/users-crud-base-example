import { IUseCase } from '../definitions';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserUsecase implements IUseCase<UserEntity, void> {
  constructor(private readonly repository: UserRepository) {}

  execute(command: UserEntity) {
    return this.repository.create(command);
  }
}
