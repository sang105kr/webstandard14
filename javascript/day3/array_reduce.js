// Array.prototype.reduce 
// 용도 : 배열요소를 순회하면서 누적계산 후 하나의 값으로 반환
const arr = [1,2,3,4];
{
  //초기값이 없을때 : 1+2->3+3->6+4->10
  const result = arr.reduce( (acc,ele,idx,arr) => acc + ele );
  console.log(result);
}
{
  //초기값이 있을때 : 0+1->1+2->3+3->6+4->10
  const result = arr.reduce( (acc,ele,idx,arr) => acc + ele , 0);
  console.log(result);
}
{
  //초기값이 있을때 : 10+1->11+2->13+3->16+4->20
  const result = arr.reduce( (acc,ele,idx,arr) => acc + ele , 10);
  console.log(result);
}
{
  const result = arr.reduce( (acc,ele,idx,arr) => {
    if(idx != arr.length-1){
      return acc + ele 
    }else{
      return (acc + ele) / arr.length
    }
  }, 0);
  console.log(result);
}
{
  const result = arr.reduce( 
    (acc,ele,idx,arr)=>(idx != arr.length-1)? acc + ele : (acc + ele) / arr.length
    , 0);
  console.log(result);
}