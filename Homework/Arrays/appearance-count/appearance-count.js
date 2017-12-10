const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const numbers = gets().split(' ').map((x) => +x);
const search = +gets();

const countAppearance = (ele, arr) => {
    let counter = 0;
    if (!arr.includes(ele)) {
        return 0;
    }
    counter++;
    arr.splice(arr.indexOf(ele), 1);

    return counter + countAppearance(ele, arr);
};

print(countAppearance(search, numbers));
