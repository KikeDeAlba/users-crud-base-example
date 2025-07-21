import { Provider } from '@nestjs/common';
import { IUserRepository } from '../definitions';
import { UserRepositoryV2 } from '../repositories/user.repository';

// Interfaz solo existe en tiempo de desarrollo
// Una clase abstracta existe en tiempo de ejecucion
export const UserRepositoryProvider: Provider = {
  provide: IUserRepository,
  useClass: UserRepositoryV2,
};
