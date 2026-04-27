/**
 * @description Removes the readonly modifier from all properties of a type, making them mutable. This is useful when you want to create a new type based on an existing one but need to allow modifications to its properties.
 * @export
 * @template T 
 */
export type Mutable<T> = { -readonly [K in keyof T]: T[K] };