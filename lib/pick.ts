import { extract } from "./utils/extract";
import { curry } from "./curry";

export const pick = curry(extract(true));
