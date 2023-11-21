export interface Transaction {
  id: string;
  employee_id: string;
  transaction_type: string;
  transaction_date: string;
  amount: number;
  updated_at?: string;
  created_at?: string;
}


export interface CreateTransactionDTO extends Omit<Transaction, 'id' | 'updated_at' | 'created_at'> { }
