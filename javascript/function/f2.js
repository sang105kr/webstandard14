{
  //생성자 함수
  function Person(name, age){
    //인스턴스 속성
    this.name = name;
    this.age = age;
  }

  // 인스턴스 메소드
  Person.prototype.smile = function(){
    console.log('웃다')
  }
  Person.prototype.eat = function(){
    console.log('먹다')
  }

  const p1 = new Person('홍길동',10);
  const p2 = new Person('홍길순',20);

  p1.smile();
  p2.eat();
  console.log(p1.name);
  console.log(p2.name);

}