export interface Employee {
  id: string;
  first_name: string;
  last_name: string;
  employee_role_id: string;
  shift_start_time: string;
  shift_end_time: string;
  updated_at?: string;
  created_at?: string;
}


export interface CreateEmployeeDTO extends Omit<Employee, 'id' | 'updated_at' | 'created_at'> { }
