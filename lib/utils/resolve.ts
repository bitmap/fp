export const resolve = (bool: boolean) =>
  (predicate: (value: any) => boolean, list: Array<any>): Array<any> => {
    const { length } = list;
    const result = [];
    let index = 0;

    while (index < length) {
      if (predicate(list[index]) === bool) {
        result[result.length] = list[index];
      }
      index += 1;
    }
    return result;
  };
