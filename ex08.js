function concatenarComSeparador(palavras,separador) {
    return palavras.reduce((acumulador, palavra, index) => {
     if (index === 0) {
       return palavra;
     } else {
       return acumulador + separador + palavra;
     }
   }, '');
 }