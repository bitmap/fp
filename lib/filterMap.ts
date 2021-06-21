import { resolveMap } from "./utils/resolveMap";
import { curry } from "./curry";

export const filterMap = curry(resolveMap(true));
