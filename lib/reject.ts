import { resolve } from "./utils/resolve";
import { curry } from "./curry";

export const reject = curry(resolve(false));
