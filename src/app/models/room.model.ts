export interface Room {
  id: string;
  rate: string;
  available: boolean;
  room_type: string;
  updated_at?: string;
  created_at?: string;
}


export interface CreateRoomDTO extends Omit<Room, 'id' | 'updated_at' | 'created_at'> { }
