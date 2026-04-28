/**
 * @description Defines a type that removes the optional marker from a string type if it exists.
 * If the string ends with a "?", it will return the string without the "?". Otherwise, it will return the original string.
 * @export
 * @template {string} S 
 */
export type RemoveOptional<S extends string> = S extends `${infer R}?` ? R : S;

// type Original = {
//   a?: number;
//   b: string;
//   c?: boolean;
// };

// type NoOptionals = RemoveOptional<keyof Original>;
// // Result:
// // type NoOptionals = "a" | "b" | "c"