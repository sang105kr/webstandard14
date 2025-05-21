{ //es6
  const person = {
    'name':'홍길동',
    'age':10,
    smile() {
      console.log('웃다');
    },
    eat() {
      console.log('먹다');
    }
  }
  //객체 속성접근
  console.log(person.name);
  //객체 메소드호출
  person.smile();
}
{ //es5
  const person = {
    'name':'홍길동',
    'age':10,
    'smile':function () {
      console.log('웃다');
    },
    'eat': function() {
      console.log('먹다');
    }
  }
  //객체 속성접근
  console.log(person.name);
  //객체 메소드호출
  person.smile();
}
{ //es6
  const person = {
    'name':'홍길동',
    'age':10,
    'smile': ()=>{
      console.log('웃다');
    },
    'eat': ()=>{
      console.log('먹다');
    }
  }
  //객체 속성접근
  console.log(person.name);
  //객체 메소드호출
  person.smile();
}