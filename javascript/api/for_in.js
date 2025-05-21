const person = {
  'name':'홍길동',
  'age':20,
  'blood': 'A'
}
//1) 점(.) 접근법
console.log(person.name);

//2) 대괄호([]) 접근법
console.log(person['name']);

console.log('---');
for(let key in person){
  console.log(person[key]);
}

