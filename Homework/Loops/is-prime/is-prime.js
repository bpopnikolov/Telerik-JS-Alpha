 isPrime(6);

 console.log(a2);

 function isPrime(n) {
     let prime = true;
     for (let i = 2; i <= Math.sqrt(n); i++) {
         if (n % i === 0) {
             prime = false;
         }
     }
     console.log(prime);
 }
