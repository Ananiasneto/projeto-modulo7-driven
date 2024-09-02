function indiceMenorString(palavras) {

    let menor=palavras[0];
    let indice=0;
  
  for (i=1;i<palavras.length;i++){
    if(palavras[i].length<menor.length){
      menor=palavras[i];
      indice=i;
    }
  }return indice;
}