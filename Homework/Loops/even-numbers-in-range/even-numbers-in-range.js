evenNumbersInRange(2, 12);

const evenNumbersInRange = (n, m) => {
    let current = n % 2 === 0 ? n : n + 1;

    while (current <= m) {
        console.log(current);
        current += 2;
    }
};
