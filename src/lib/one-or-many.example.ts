import { OneOrMany } from "@angular/forms/signals";

// Accept a single item or an array
type TagInput = OneOrMany<string>; // string | string[] | readonly string[]