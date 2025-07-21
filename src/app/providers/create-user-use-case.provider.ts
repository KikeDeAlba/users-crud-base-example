import { Provider } from '@nestjs/common';
import {
  CreateUserImplUsecase,
  CreateUserUseCase,
} from '../use-cases/create-user-impl.usecase';

export const CreateUserUseCaseProvider: Provider = {
  provide: CreateUserUseCase,
  useClass: CreateUserImplUsecase,
};
