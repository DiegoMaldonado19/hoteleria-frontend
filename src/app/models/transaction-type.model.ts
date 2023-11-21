export interface TransactionType {
  id: string;
  name: string;
  updated_at?: string;
  created_at?: string;
}


export interface CreateTransactionTypeDTO extends Omit<TransactionType, 'id' | 'updated_at' | 'created_at'> { }
