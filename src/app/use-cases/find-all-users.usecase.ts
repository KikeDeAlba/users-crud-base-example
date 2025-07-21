import { ISystemUser, IUseCase, IUserRepository } from '../definitions';
import { UserEntity } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllUsersUsecase implements IUseCase<void, ISystemUser[]> {
  constructor(private readonly repository: IUserRepository) {}

  execute(): ISystemUser[] {
    return this.repository.findAll();
  }
}
