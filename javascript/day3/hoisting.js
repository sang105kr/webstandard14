// 호이스팅 : 변수와 함수 선언이 해당 스코프의 최상단으로 끌어 올려지는 현상
// var 로 선언된 식별자 : undefined값으로 초기화(O)
// let,const 로 선언된 식별자 : 초기화(X)

//1) 변수 호이스팅
{
  // console.log(myVar);
  // let myVar = 10;   // 변수가 호이스팅이 발생되면서 undefined값으로 초기화하지 않음
}
{
  // console.log(myVar);
  // var myVar = 10;   // 변수가 호이스팅이 발생되면서 undefined값이 할당되어 초기화됨.
}
//2) 함수 호이스팅
{
  // console.log(add(10,20))
  // function add(x,y){
  //   return x + y ;
  // }
}
{
  let add = (x,y)=>{
    return x + y ;
  }

  console.log(add(10,20))
}
