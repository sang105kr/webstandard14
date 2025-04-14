// Array.prototype.forEach
// 용도 : 배열요소를 하나씩 순환하면서 처리 (주로 for문 대체), 반환값 : None
const arr = [1,2,3];
arr.forEach( (ele,idx,arr)=>console.log(ele, idx, arr));

// { // 일반 for문
//   for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
//   }
// }
// { // for ~ of문
//   for(let ele of arr){
//     console.log(ele)
//   }  
// }
// { // Array.prototype.forEach()
//   arr.forEach( ele => console.log(ele) );
//   arr.forEach( function(ele){console.log(ele) });
// }