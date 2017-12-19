// DONT WASTE TIME READING THIS!  




// const gets = this.gets || require('readline-sync').question;
// const print = this.print || console.log;

// const n = +gets();
// const recipeProducts = {};
// const mesures = {
//     tbsps: {
//         tsps: 3,
//         cups: 1 / 16,
//     },
//     tsps: {
//         tbsps: 1 / 3,
//         mls: 5,
//         cups: 1 / 48,
//     },
//     ls: {
//         mls: 1000,
//         tsps: 1000 / 5,
//     },
//     mls: {
//         ls: 1 / 1000,
//         tsps: 1 / 5,

//     },
//     'fl ozs': {
//         cups: 1,
//         tsps: 48,
//         tbsps: 16,
//         pts: 1 / 2,
//     },
//     gals: {
//         qts: 4,
//     },
//     pts: {
//         cups: 2,
//         tsps: 96,
//         tbsps: 32,
//     },
//     qts: {
//         gals: 1 / 4,
//         pts: 2,
//         cups: 4,
//         tsps: 4 * 48,
//         tbsps: 4 * 16,
//     },
//     cups: {
//         qts: 1 / 4,
//         pts: 1 / 2,
//         tsps: 48,
//         tbsps: 16,
//     },
// };

// for (let i = 0; i < n; i++) {
//     const product = gets().split(':').map((x) => x.toLowerCase());
//     if (!recipeProducts[product[2]]) {
//         recipeProducts[product.pop()] = product;
//     }
//     if (recipeProducts[product[2]]) {
//         if (recipeProducts[product[2]][1] !== product[1]) {
//             const valueToAdd = product[0] / (mesures[recipeProducts[product[2]][1]][product[1]]);
//             recipeProducts[product[2]][0] = +recipeProducts[product[2]][0] + valueToAdd;
//         }
//     }
// }
// console.log(recipeProducts);
// console.log('-----RECIPE------');
// console.log(recipeProducts);
// console.log('-'.repeat(30));
// const m = +gets();
// const usedProducts = {};

// for (let i = 0; i < m; i++) {
//     const product = gets().split(':');
//     usedProducts[product.pop().toLowerCase()] = product.join(':');
// }

// console.log('-----USED------');
// console.log(usedProducts);
// console.log('-'.repeat(30));
