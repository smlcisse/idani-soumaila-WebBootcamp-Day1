function isPrime(nbr) {
    if (nbr <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(nbr); i++) {
      if (nbr % i === 0) {
        return false;
      }
    }
    return true;
  }
  /*const nbr = 12;
  const isnbrPrime = isPrime(nbr);
  console.log(`Is ${nbr} Prime? ${isnbrPrime}`);*/