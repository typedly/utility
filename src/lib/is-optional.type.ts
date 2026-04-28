/**
 * @description Defines a type that checks if a string type is optional by determining if it ends with a "?" character.
 * If the string ends with "?", it returns true, indicating that the string is optional. Otherwise, it returns false.
 * @export
 * @template {string} K 
 */
export type IsOptional<K extends string> = K extends `${string}?` ? true : false;
