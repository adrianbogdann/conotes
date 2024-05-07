import { Injectable } from '@nestjs/common';
import { User, AuthServiceInterface } from './entities/auth.entity';

@Injectable()
export class AuthService implements AuthServiceInterface {
  async register(user: User): Promise<User> {
    return new Promise((resolve) => resolve(user));
  }
  async login(username: string, password: string): Promise<string> {
    // Implement login logic here
    return new Promise((resolve) => resolve('Yes'));
  }

  async validateUser(token: string): Promise<User> {
    // Implement user validation logic here
    return new Promise((resolve) =>
      resolve({ id: '1', username: 'Adi', password: 'pass' }),
    );
  }
}
