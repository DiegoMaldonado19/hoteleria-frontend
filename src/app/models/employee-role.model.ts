export interface EmployeeRole {
  id: string;
  name: string;
  updated_at?: string;
  created_at?: string;
}

export interface CreateEmployeeRoleDTO extends Omit<EmployeeRole, 'id' | 'updated_at' | 'created_at'> { }
