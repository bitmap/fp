export const resolveMap =
  (bool: boolean) =>
  <T, V, P extends (value: T) => boolean, M extends (value: T) => V>(
    predicate: P,
    mapper: M,
    list: T[],
  ): any[] => {
    const { length } = list;
    const result = [];
    let index = 0;

    while (index < length) {
      if (predicate(list[index]) === bool) {
        result[result.length] = mapper(list[index]);
      }
      index += 1;
    }
    return result;
  };
