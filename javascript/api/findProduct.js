
async function findProduct(id){

  const option = {
    'method': 'GET',
  };
  const url = `http://localhost:9080/api/products/${id}`;
  try {
    const res = await fetch(url,option);

    if(res.status == '404') {
      throw new Error(`상품번호 : ${id} 를 찾을수 없습니다.`);
    }else if(res.status == '200' ||  res.status == '201'){

    }else {
      throw new Error(`응답오류!`);
    }
    const json = await res.json();  // json포맷의 문자열 => js객체
    if(json.header.rtcd == 'S00' ){
      console.log(`상품번호 : ${json.body.productId} 가 조회 되었습니다.`)
      console.log(`조회된 상품정보 : `);
      for(let key in json.body){
        console.log(`${key} : ${json.body[key]}`);
      }
    }else if (json.header.rtcd == 'E03'){
      console.log(`상품번호 : ${json.body.productId} 를 찾을수 없습니다.`);
    }else{
      console.log(json.header,rtmsg);
    }
  }catch(err){
    console.error(err.message);
  }    
}

findProduct(242);