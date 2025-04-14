{
  // 1)함수 선언문
  function add(x,y){
    return x + y;
  }
  console.log(add(10,20));
}
{
  // 2)함수 표현식
  const add = function (x,y){
    return x + y;
  }
  console.log(add(10,20));
}
{
  // 3)화살표 함수
  const add = (x,y)=>{
    return x + y;
  }  
  console.log(add(10,20));
}
{
  // 3-2)화살표 함수
  // 화살표 함수내에서 실행문이 1개면 중괄호 생략가능
  // 그리고 실행문 1개가 표현식을 포함한 return문이라면 return 생략됨.
  const add = (x,y)=> x + y;  
  console.log(add(10,20));
}