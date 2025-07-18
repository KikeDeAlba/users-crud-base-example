export interface ISystemUser<TData> {
  id: string;
  type: 'premium' | 'base' | 'standard' | 'admin';
  name: string;
  email: `${string}@${string}`;
  age: number;
  data: TData;
  role: string;
  isActive: boolean;
  createdAt: Date;
}

// Interface para repositorio de usuarios
export interface IUserRepository<TUser> {
  create(user: TUser): void;

  findById(id: string): TUser | undefined;

  update(id: string, userData: Partial<TUser>): boolean;

  delete(id: string): boolean;

  findAll(): TUser[];

  findByEmailAndRole(email: string, role: string): TUser | undefined;
}

// Interface para casos de uso
export interface IUseCase<TInput, TOutput> {
  execute(input: TInput): TOutput;
}