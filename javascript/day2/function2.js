// 함수 표현식
const add = function (num1,num2){
  return num1+ num2;
}

// 화살표
let add2 = (num1,num2)=>{
  return num1 + num2;
}

// 화살표함수에서 실행문이 1개이면 중괄호 생략가능, 또한 return도 생략가능
add2 = (num1,num2)=>num1 + num2;
console.log(add2(10,20))

function method(f){
  console.log(f(10,20))
}

method(add2)
method((num1,num2)=>num1 + num2)



