//문제1) 1~10까지 짝수합, 홀수합을 구하시오.

let even = 0;
let odd = 0;

for(let i=1; i<=10; i++){
  if( i % 2 == 0){
    even += i;
  }else{
    odd += i;
  }
}

console.log(`짝수합=${even}, 홀수합=${odd}`);

