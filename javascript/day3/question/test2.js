{
  // truethy, falsy
  console.log( true + 1); // true 산술연산 -> 1
  console.log( false + 1);// false 산술연산 -> 0
}
{ // short circuit evaluation : 단축 평가
  {
    // &&
    let result = true && false;
    console.log(result);  // false

    result = false && true;
    console.log(result);  // fasle   
  }
  {
    // ||
    let result = true || false;
    console.log(result); // true
    
    result = false || true;
    console.log(result); // true   
  }
}