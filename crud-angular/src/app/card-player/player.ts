import { Character } from '../card-character/character';
import { Avatar } from './../enum/avatar.enum';
import { Role } from './../enum/role.enum';
export interface Player {
  _id: string;
  name: string;
  avatar: Avatar;
  role: Role;
  guild: string;
  description: string;
  age: number;
  level: number;
  points: number;
  energy: number;
  victories: number;
  matches: number;
  characters: Character[];
}
