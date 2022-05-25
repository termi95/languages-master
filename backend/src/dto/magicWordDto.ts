export interface MagicWordHeaderDTO {
  id?: number;
  name: string;
  userId: number;
}

export interface MagicWordDTO {
  id?: number;
  headerId: number;
  word: string;
  tranWord: string;
  userId: number;
}
