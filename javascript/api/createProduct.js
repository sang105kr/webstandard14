
async function createProduct(){

  const data = `{
    "pname":"상품명JS",
    "quantity": 10,
    "price": 10000
  }`;

  const option = {
    'method': 'POST',
    'headers' : {
      'Content-Type': 'application/json'
    },
    'body' : data
  };
  const url = 'http://localhost:9080/api/products';
  try {
    const res = await fetch(url,option);
    if(!res.ok) {
      throw new Error('응답 오류!');
    }
    const json = await res.json();
    if(json.header.rtcd == 'S00' ){
      console.log(`상품번호 : ${json.body.productId} 가 생성되었습니다.`)
      console.log(`상품정보 : ${json.body}`);
    }else{
      console.log(json.header,rtmsg);
    }
  }catch(err){
    console.error(err.message);
  }    
}

createProduct();