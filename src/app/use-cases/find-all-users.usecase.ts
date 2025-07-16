import { IUseCase } from '../definitions';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllUsersUsecase implements IUseCase<void, UserEntity[]> {
  constructor(private readonly repository: UserRepository) {}

  execute(): UserEntity[] {
    return this.repository.findAll();
  }
}
