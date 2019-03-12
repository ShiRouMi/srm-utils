function _chunk(array: any[], size: number = 1): any[] {
  let length: number = array.length;

  if (length === 0) return [];

  let newLength: number = Math.ceil(length / size);

  let newArr: any[] = [];

  while (array.length >= 1) {
    let value: any = array.splice(0, size);
    newArr.push(value);
  }

  return newArr;
}
