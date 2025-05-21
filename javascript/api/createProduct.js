
async function createProduct(){

  const data = {
    "pname":"상품명JS",
    "quantity": 10,
    "price": 10000
  };

  const option = {
    'method': 'POST',
    'headers' : {
      'Content-Type': 'application/json'
    },
    'body' : JSON.stringify(data)     // js객체 => json포맷의 문자열
  };
  const url = 'http://localhost:9080/api/products';
  try {
    const res = await fetch(url,option);
    if(!res.ok) {
      throw new Error('응답 오류!');
    }
    const json = await res.json();  // json포맷의 문자열 => js객체
    if(json.header.rtcd == 'S00' ){
      console.log(`상품번호 : ${json.body.productId} 가 생성되었습니다.`)
      console.log(`상품정보 : `);
      for(let key in json.body){
        console.log(`${key} : ${json.body[key]}`);
      }
    }else{
      console.log(json.header,rtmsg);
    }
  }catch(err){
    console.error(err.message);
  }    
}

createProduct();