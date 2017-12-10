calculateFact(5);

const calculateFact = (n) => {
    let fact = 1;
    let current = 1;

    while (current <= n) {
        fact *= current;
        current += 1;
    }

    console.log(fact);
};
