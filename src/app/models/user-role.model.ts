export interface UserRole {
  id: string;
  name: string;
  updated_at?: string;
  created_at?: string;
}

export interface CreateUserRoleDTO extends Omit<UserRole, 'id' | 'updated_at' | 'created_at'> { }
