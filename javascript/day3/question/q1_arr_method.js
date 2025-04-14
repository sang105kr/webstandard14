const arr = [
  {name:'홍길동1',age:10,blood:'A',height:160, weight:60, gender:'남'},
  {name:'홍길동2',age:20,blood:'A',height:170, weight:70, gender:'여'},
  {name:'홍길동3',age:30,blood:'B',height:180, weight:80, gender:'남'},
  {name:'홍길동4',age:40,blood:'O',height:190, weight:90, gender:'여'}
];
//배열의 고차함수를 이용하여 코드를 구현하시오
{
  //문1) 평균나이를 구하시오.
  { //case1) for ~ of
    let sumOfAge = 0;
    for(let p of arr){
      sumOfAge += p.age;
    }
    let averageOfAge = sumOfAge / arr.length;
    console.log(`averageOfAge=${averageOfAge}`);
  }
  {
    //case2) 고차함수 Array.prototype.forEach()
    let sumOfAge = 0;
    arr.forEach( (person,idx,arr) => sumOfAge += person.age );
    let averageOfAge = sumOfAge / arr.length;
    console.log(`averageOfAge=${averageOfAge}`);    
  }
  {
    //case3) 고차함수 Array.prototype.reduce()
    const sumOfAge = arr.reduce( (acc,person,idx,arr) => acc + person.age, 0);
    let averageOfAge = sumOfAge / arr.length;
    console.log(`averageOfAge=${averageOfAge}`);    
  }  
  {
    //case4) 고차함수 Array.prototype.reduce()
    const averageOfAge = arr.reduce( 
      (acc,person,idx,arr) => (idx != arr.length-1 ) ? acc + person.age : (acc + person.age)/arr.length
      , 0);
    console.log(`averageOfAge=${averageOfAge}`);    
  }   
}
{
  //문2) 남성과 여성의 수를 구하시오.
  {
    //case1) 고차함수 Array.prototype.filter()
    const menArr = arr.filter( person => person.gender == '남' );
    const womenArr = arr.filter( person => person.gender == '여' );
    console.log(`남성:${menArr.length}명, 여성:${womenArr.length}명`);
  }
  {
    //case2) 고차함수 Array.prototype.reduce()
    const cnt = arr.reduce( (acc,person)=>{
      acc[person.gender] = (acc[person.gender] || 0) + 1;
      return acc;
    } , {} );
    console.log(cnt);
  }  
}
{
  //문3) 이름과,나이를 요소(객체리터럴)로 갖는 배열로 변환하시오.
  {
    const result = arr.map((person,idx,arry)=>{ return {'name':person.name, 'age':person.age} });
    console.log(result);
  }
  {
    const result = arr.map((person,idx,arry)=> ({'name':person.name, 'age':person.age}) );
    console.log(result);
  }
}
{
  //문4) 몸무게가 가장 많은 사람의 키는?
  const result = arr.reduce((max, person, idx, arr)=>{
    return max.weight < person.weight ? person : max
  }, arr[0]);
  console.log(result.height);
}