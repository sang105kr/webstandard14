import {ajax} from './common.js';

async function f () {
  const url = `http://localhost:9080/api/products`;
  try {
    const json = await ajax.get(url);
    console.log(json.body);
    //json.body.forEach(product => console.log(product.pname) );
  }catch(err){
    console.log(err.mesage);
  }

}
f();