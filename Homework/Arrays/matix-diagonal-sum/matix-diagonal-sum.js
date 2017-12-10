const matrix = [
    [1, 2, 3, 4, 5],
    [2, 1, 4, 5, 6],
    [3, 4, 1, 6, 7],
    [4, 5, 6, 1, 8],
    [5, 6, 7, 8, 1],
];

const underDiagonalSum = (matix) => {
    let sum = 0;

    for (let i = 1; i < matrix.length; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            sum += matix[i][j];
            row += `${matrix[i][j]} + `;
        }
        console.log(row);
    }
    console.log(`The sum under main diagonal is: ${sum}`);
};
underDiagonalSum(matrix);
