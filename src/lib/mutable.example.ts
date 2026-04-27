import { Mutable } from "./mutable.type";

type Data = {
  readonly id: number;
  readonly tags: readonly string[];
};
// Remove readonly properties
type MutableData = Mutable<Data>; // { id: number; tags: readonly string[] }