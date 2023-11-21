export interface Task {
  id: string;
  employee_id: string;
  task_description: string;
  task_date: string;
  task_completed: string;
  updated_at?: string;
  created_at?: string;
}


export interface CreateTaskDTO extends Omit<Task, 'id' | 'updated_at' | 'created_at'> { }
