//1) 함수 선언문
function add(num1, num2){
  let sum = 0;
  sum = num1 + num2;
  return sum;
}

const result = add(10,20);
console.log('result=' + result);
console.log(`result=${result}`); // 템플릿 리터럴

//2) 함수 표현식
const add2 = function (num1, num2){
  let sum = 0;
  sum = num1 + num2;
  return sum;
}
console.log(add2);
const result2 = add2(10,20);
console.log(`result2=${add2(10,20)}`)

//3) 화살표 함수
const add3 = (num1, num2)=>{
  let sum = 0;
  sum = num1 + num2;
  return sum;
}
console.log(add3);
const result3 = add3(10,20);
console.log(`result3=${add3(10,20)}`)