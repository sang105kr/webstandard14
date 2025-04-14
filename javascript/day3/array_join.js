// Array.prototype.join 
// 용도 : 배열요소를 순회하면서 요소를 연결하여 문자열로 반환
const fruits = ['apple','orange','mango','melon'];
{
  const result = fruits.join(); //구분자 매개값이 없으면 콤마(,)로 연결
  console.log(result);
}
{
  const result = fruits.join('-');
  console.log(result);
}
