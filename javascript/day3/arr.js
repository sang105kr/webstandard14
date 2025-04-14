{
  // 배열 생성
  // case1) 배열 리터럴
  const arr = [1,2,3];

  // case2) Array생성자 함수
  // const arr = new Array(1,2,3);

  // case2) Array.of 정적메소드;
  // const arr = Array.of(1,2,3);

  for(let ele of arr){
    console.log(ele);
  }
  for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}
{
  //배열 요소 추가
  const arr = [1,2];
  arr[2] = 3;
  console.log(arr);

  //배열 요소 제거
  arr.splice(2,1);
  console.log(arr);
}