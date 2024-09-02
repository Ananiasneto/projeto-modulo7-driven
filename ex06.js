function corrigeSaldos(nomes,saldos) {
    return nomes.map((nome,index)=>{
       if(nome[0]==='M'){
       return saldos[index]+=100;
      }else{
         return saldos[index];
      }
    })
  }