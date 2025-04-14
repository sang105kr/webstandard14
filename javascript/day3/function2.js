{
  // 객체 리터럴(값)
  const person = {
    name:'홍길동',
    age:20,

    smile(){
      console.log('웃다')
    }  
  }
  console.log(person.name);
  person.smile();

  // 객체에 동적으로 속성 추가 가능
  person.gender = '남';
  person.eat = function(){
    console.log(`${this.name}-${this.gender} 가 웃다`);
  }

  person.eat();
}
{
  // 생성자 함수 : 객체 설계도
  function Person(name,age){
    //인스턴스 필드
    this.name = name;
    this.age = age;
  }
  //인스턴스 메소드
  Person.prototype.smile = function(){
    console.log('웃다');
  }

  const p1 = new Person('홍길동',20);
  const p2 = new Person('홍길순',30);

  console.log(p1.name);
  p1.smile();

  console.log(p2.name);
  p2.smile();
}


