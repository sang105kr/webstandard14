// Array.prototype.filer 
// 용도 : 배열요소를 순회하면서 조건에 맞는 요소만 필터링하여 새로운 배열로 반환
const arr = [1,2,3,4,5];

const arr2 = arr.filter( (ele,idx,arr) => ele % 2 == 0 );
const arr3 = arr.filter( ele => ele % 2 == 1 );

console.log(arr2,arr3)
