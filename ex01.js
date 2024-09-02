function acumulaVogais(lista) {
    let acumulador='';
    for(i=0;i<lista.length;i++){
      if(lista[i]==='a' || lista[i]==='e'|| lista[i]==='i'|| lista[i]==='o'|| lista[i]==='u'){
        acumulador+=lista[i];
      }
    }
    return acumulador;
  
  }