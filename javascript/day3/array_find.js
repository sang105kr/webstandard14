{
  // Array.prototype.find()
  // 용도 : 배열요소를 순회하면서 첫번째로 만족하는 요소를 반환
  const arr = [1,2,3,4];

  const result = arr.find( (ele,idx,arr)=> ele == 3 );
  console.log(result);
}
{
  // Array.prototype.findIndex()
  // 용도 : 배열요소를 순회하면서 첫번째로 만족하는 요소의 인덱스를 반환
  const arr = [1,2,3,4];

  const result = arr.findIndex( (ele,idx,arr)=> ele == 3 );
  console.log(result);
}

