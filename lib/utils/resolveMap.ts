import { reduce } from "../reduce";

type Predicate = (value: any) => boolean
type Mapper = (value: any) => any

export const resolveMap = (bool: boolean) =>
  (predicate: Predicate, mapper: Mapper, list: Array<any>): Array<any> =>
    reduce(
      (acc, item) => {
        if (predicate(item) === bool) {
          acc.push(mapper(item));
        }
        return acc;
      },
      [],
      list,
    );
