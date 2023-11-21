export interface RoomType {
  id: string;
  name: string;
  price: number;
  updated_at?: string;
  created_at?: string;
}

export interface CreateRoomTypeDTO extends Omit<RoomType, 'id' | 'updated_at' | 'created_at'> { }
