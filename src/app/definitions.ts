export interface ISystemUser {
  id: string;
  type: 'premium' | 'base' | 'standard' | 'admin';
  name: string;
  email: `${string}@${string}`;
  age: number;
  data: object;
  role: string;
  isActive: boolean;
  createdAt: Date;
}

// Interface para repositorio de usuarios
export abstract class IUserRepository {
  abstract create(user: ISystemUser): void;

  abstract findById(id: string): ISystemUser | undefined;

  abstract update(id: string, userData: Partial<ISystemUser>): boolean;

  abstract delete(id: string): boolean;

  abstract findAll(): ISystemUser[];

  abstract findByEmailAndRole(
    email: string,
    role: string,
  ): ISystemUser | undefined;
}

// Interface para casos de uso
export interface IUseCase<TInput, TOutput> {
  execute(input: TInput): TOutput;
}
