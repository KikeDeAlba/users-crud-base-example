import { ISystemUser } from '../definitions';

export type UserData = { phoneNumber: string };

export class UserEntity implements ISystemUser<UserData> {
  constructor(data: Partial<UserEntity>) {
    Object.assign(this, data);
  }

  age: number;
  createdAt: Date;
  data: UserData;
  email: `${string}@${string}`;
  id: string;
  isActive: boolean;
  name: string;
  role: string;
  type: 'premium' | 'base' | 'standard' | 'admin';

  deactivate(): void {
    this.isActive = false;
  }

  getInfo(): string {
    return `Info: nombre es ${this.name} y la edad es ${this.age}`;
  }
}
