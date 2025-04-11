// 생성자함수 : 객체 설계도
function Person(name, age){
  //인스턴스 필드
  this.name = name;
  this.age = age;
}

//인스턴스 메소드
Person.prototype.smile =  function() {
  console.log(`${this.name}가 웃다`);
}

Person.prototype.eat = function() {
  console.log(`${this.name}가 먹다`);
}

const p1 = new Person('홍길동', 20);
const p2 = new Person('홍길서', 30);
const p3 = new Person('홍길남', 40);

p1.smile();p1.eat();
p2.smile();p2.eat();
p3.smile();p3.eat();