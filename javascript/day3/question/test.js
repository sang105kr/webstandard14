const person = { name:'홍길동', age:20};

// 객체 리터럴 접근하는 방법 2가지
console.log(person.name); // 점(.) 접근법
console.log(person['name']); // 대활호([]) 접근법

const prop = 'name';
console.log(person.prop);
console.log(person[prop]);

//속성 동적 추가
person.gender = '남';
console.log(person)
person['blood'] = 'A';
console.log(person)

person.name = '홍길순';
console.log(person)
person['name'] = '홍길남';
console.log(person)