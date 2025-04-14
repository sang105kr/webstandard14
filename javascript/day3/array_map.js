// Array.prototype.map 
// 용도 : 배열요소를 다른 값으로 치환하여 새로운 배열로 반환 받는다.
const arr = [1,2,3];
{
  arr.map( (ele,idx,arr)=>{ console.log(ele,idx,arr)   } );
}
{
  const newArr = arr.map( (ele,idx,arr)=>  ele * 2  );
  console.log(newArr);
  const newArr2 = arr.map( ele =>  ele * 2 );
  console.log(newArr2);
}