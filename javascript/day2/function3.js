// 배열
arr = [1,2,3,4];

// for(ele of arr){
//   console.log(ele);
// }

// for(let i=0; i<arr.length; i++){
//   console.log(arr[i]);
// }

const double = value => value * 2;
const triple = value => value * 3;

function method(arr,f){
  for( ele of arr) {
    console.log(f(ele))
  }
}

method(arr, double);
method(arr, triple);
