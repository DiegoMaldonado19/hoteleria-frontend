export interface User {
  id: string;
  username: string;
  email: string;
  employee_id: string;
  user_role_id: string;
  updated_at?: string;
  created_at?: string;
}


export interface CreateUserDTO extends Omit<User, 'id' | 'updated_at' | 'created_at'> { }
