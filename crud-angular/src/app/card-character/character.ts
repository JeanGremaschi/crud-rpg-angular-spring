import { Attributes } from "./attributes";

export interface Character {
  _id: string;
  name: string;
  class: string;
  attributes: Attributes;
}
