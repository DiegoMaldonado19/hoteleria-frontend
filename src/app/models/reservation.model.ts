export interface Reservation {
  id: string;
  check_in_date: string;
  check_out_date: string;
  created_by_customer: boolean;
  transaction_id: string;
  employee_id: string;
  user_id: string;
  room_id: string;
  updated_at?: string;
  created_at?: string;
}


export interface CreateReservationDTO extends Omit<Reservation, 'id' | 'updated_at' | 'created_at'> { }
