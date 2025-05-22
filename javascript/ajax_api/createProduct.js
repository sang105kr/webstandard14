import {ajax} from './common.js';

async function f(){

  const url = 'http://localhost:9080/api/products';
  const payload = {
    pname : '지우개',
    quantity : 10,
    price : 10000
  };

  try{
    const json = await ajax.post(url,payload);
    console.log(json.body);
  }catch(err){
    console.log(err.message);
  }

}
f();