// let arr = [11,13,112,15,9,903]
//  arr.sort((a,b)=> a - b)
//    arr = arr.slice(-2)
//  arr.sort((a,b)=> a - b)
//  let res2 = arr.splice(1)
// let res1 = arr.splice(0,1)

// // let ov = res1 - res2
// let on= arr.push(res1 - res2);
// console.log(on.push());
// [11,23,14,23,12]
// [11,14,12]
// [11,2]
// [9]

function lastNumber(arr) {
  while (arr.length > 1) {
    let array = arr.sort((a, b) => a - b);
    let res = array[array.length - 1] - array[array.length - 2];
    array.splice(array.length - 2, 2);
    res ? array.push(res) : null;
  }
  return arr;
}
console.log(lastNumber([11, 14, 12]));