// 2개의 매개변수를 입력받아 합계를 구하고 구한 합계를 반환하는 함수를
// 구현하시오. 

{
  //일반 함수
  function add(x,y){
    return x + y;
  }

  const result = add(10,20);
  console.log(result);
}
{
  //함수 표현식
  const add = function (x,y){
    return x + y;
  }
  const result = add(10,20);
  console.log(result);

}
{
  //화살표 함수
  const add = (x,y) => x + y;  

  const result = add(10,20);
  console.log(result);

  function xyz(f){
    const result = f(10,20);
    console.log(result);
  }

  xyz(add);
}