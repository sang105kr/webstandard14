// 객체 리터럴
// es6
const person = {
  name:'홍길동',
  age:20,

  smile(){
    console.log('웃다')
  },
  eat(){
    console.log('먹다')
  }
}

console.log(person.name);
console.log(person.age);
person.smile();
person.eat();

// es5
const person2 = {
  name:'홍길동',
  age:20,

  smile: function(){
    console.log('웃다')
  },
  eat: function(){
    console.log('먹다')
  }
}
console.log(person.name);
console.log(person2.age);
person2.smile();
person2.eat();