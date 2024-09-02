function temperaturasAbaixoZero(temperaturas) {
    return temperaturas.filter(temperatura => temperatura - 273 < 0).map(temperatura => temperatura - 273);        
  }