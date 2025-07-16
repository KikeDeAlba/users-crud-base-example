import { UserEntity } from './entities/user.entity';

export const db: Record<string, UserEntity | undefined> = {
  pedro: new UserEntity({ name: 'pedro', age: 20 }),
};
