const f = v => v2 => v2 * v;

const f2 = f(2);
console.log(f2(10));

console.log(f(2)(10));