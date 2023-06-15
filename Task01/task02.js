function isprime(nbr) {
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
  const isnbrPrime = isprime(nbr);
  console.log(`Is ${nbr} prime? ${isnbrPrime}`);*/