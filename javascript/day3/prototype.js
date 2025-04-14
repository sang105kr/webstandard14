//생성자함수 : 객체 설계도
function Person(name,age){
  this.name = name;
  this.age = age;
}

console.log(typeof(Person));
Person.prototype.smile = function(){
  console.log('웃다');
}
Person.prototype.eat = function(){
  console.log('먹다');
}

const p = new Person('홍길동',10);
p.smile();
p.eat();

console.dir(Person.prototype);
console.dir(Array.prototype);

{
  const obj = {}; //빈 객체 리터럴
  obj.name = '홍길동';
  console.log(obj);
}