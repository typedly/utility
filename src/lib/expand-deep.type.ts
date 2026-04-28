/**
 * @description Defines a type that recursively expands all nested properties of a given type T.
 * This is particularly useful for complex types with multiple levels of nesting, such as objects containing other objects or arrays.
 * The type handles various cases, including function types, Date types, array types, object types, and primitive types, ensuring that all nested structures are fully expanded.
 * @export
 * @template T 
 */
export type ExpandDeep<T> =
  // Handle function types. e.g. () => void => () => void
  T extends (...args: unknown[]) => unknown ? T
  // Handle Date type. e.g. Date => Date
  : T extends Date ? T
  // Handle array types. e.g. string[] => string[]
  : T extends readonly (infer U)[] ? ExpandDeep<U>[]
  // Handle object types. e.g. { name: string } => { name: string }
  : T extends object ? { -readonly [K in keyof T]: ExpandDeep<T[K]> }
  // Handle primitive types. e.g. string => string
  : T;

// // Example usage:
// type Example = {
//   user: {
//     readonly name: string;
//     address: {
//       readonly city: string;
//     }
//   }
// };

// type Expanded = ExpandDeep<Example>;
// // Result:
// // {
// //   user: {
// //     name: string;
// //     address: { city: string; }
// //   }
// // }