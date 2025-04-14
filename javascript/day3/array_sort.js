// Array.prototype.sort 
// 용도 : 배열요소를 정렬하여 새로운 배열로 반환

const arr = [3,2,1,4];
{
  // 기본정렬 : 오름차순
  const arr2 = arr.sort();
  console.log(arr2);
}
{
  // 내림차순
  const arr2 = arr.sort( (ele1, ele2) => ele2 - ele1);
  console.log(arr2);
}