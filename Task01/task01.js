function factorial(nbr) {     
    if (nbr < 0) { 
       return -1; 
    } 
    else if(nbr == 0){ 
       return 1; 
    } 
    else { 
       let answ = 1; 
       for(var i = nbr; i > 1; i--){ 
          answ *= i; 
       }; 
       return answ; 
    } 
 }; 
 /*const nbr = 4;
 const answ = factorial(nbr);
 console.log(`The factorial of ${nbr} is ${answ}`);*/