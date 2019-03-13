// 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
// 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
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

// 创建一个新数组，包含原数组中所有的非假值元素。
// 例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
function _compact(array: any[]): any[] {
  return array.filter(item => +item !== 0 && !isNaN(+item));
}

function _compact2(array: any[]): any[] {
  return array.filter(item => {
    if (item) {
      return item;
    }
  });
}

// 创建一个新数组，将array与任何数组 或 值连接在一起。
function _concat(array: any[], values: any): any[] {
  let args: any[] = [].slice.call(arguments);
  args.shift();
  let lastArgs: any[] = args;
  let newArr: any[];
  newArr = array;
  lastArgs.flat().forEach(item => {
    newArr.push(item);
  });
  return newArr;
}
// 🙄 搞那么复杂，实际上 array.concat() 已经能实现上面的功能了，只不过重新封装下。。。
function _concat2(array: any[], values: any): any[] {
  let args: any[] = [].slice.call(arguments);
  args.shift();
  let lastArgs: any[] = args;
  return array.concat(...lastArgs);
}
