import { IUserRepository } from '../definitions';
import { db } from '../db';
import { UserEntity } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository implements IUserRepository<UserEntity> {
  create(user: UserEntity): void {
    if (db[user.id]) {
      throw new Error('User already exists');
    }

    db[user.id] = user;
  }

  delete(id: string): boolean {
    if (!db[id]) {
      return false;
    }

    db[id] = undefined;

    return true;
  }

  findAll(): UserEntity[] {
    return Object.values(db).filter((user) => user != null);
  }

  findByEmailAndRole(email: string, role: string): UserEntity | undefined {
    const users = this.findAll();
    return users.find((user) => user.email === email && user.role === role);
  }

  findById(id: string): UserEntity | undefined {
    return db[id];
  }

  update(id: string, userData: Partial<UserEntity>): boolean {
    const user = db[id];

    if (!user) {
      return false;
    }

    db[id] = new UserEntity({ ...user, ...userData });

    return true;
  }
}
