/**
 * @description Expands a type by recursively resolving its properties. This is useful for improving readability and debugging, as it allows you to see the full structure of a type without nested references.
 * @export
 * @template T 
 */
export type Expand<T> = T extends object ? { [K in keyof T]: T[K] } : T;