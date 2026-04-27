import { Expand } from "./expand.type";

type Data = {
  readonly id: number;
  readonly tags: readonly string[];
};

// Expand intersected types for IDE readability
type A = { foo: number } & { bar: string };
type Expanded = Expand<A>; // { foo: number; bar: string }