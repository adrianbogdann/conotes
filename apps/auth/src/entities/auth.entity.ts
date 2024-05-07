export interface User {
  id: string;
  username: string;
  password: string;
}

export interface AuthServiceInterface {
  register(user: User): Promise<User>;
  login(username: string, password: string): Promise<string>;
  validateUser(token: string): Promise<User>;
}
