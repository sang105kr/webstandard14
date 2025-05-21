

async function listProduct(pageNo,numOfRows){

  const option = {
    'method': 'GET',
  };
  const url = `http://localhost:9080/api/products/paging?pageNo=${pageNo}&numOfRows=${numOfRows}`;
  try {
    const res = await fetch(url,option);

    if(res.status == '200' ||  res.status == '201'){

    }else {
      throw new Error(`응답오류!`);
    }
    const json = await res.json();  // json포맷의 문자열 => js객체
    if(json.header.rtcd == 'S00' ){
      console.log('상품목록');
      json.body.forEach(product => {
        console.log(product.productId, product.pname, product.quantity, product.price);
      });

    }else if (json.header.rtcd == 'E03'){
      console.log(`상품번호 : ${json.body.productId} 를 찾을수 없습니다.`);
    }else{
      console.log(json.header,rtmsg);
    }
  }catch(err){
    console.error(err.message);
  }    
}

listProduct(1,10);