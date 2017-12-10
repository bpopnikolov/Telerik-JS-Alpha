const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let x = +gets();
let y = +gets();
let z = +gets();


    if (x > y && x > z) {
        if (y > z) {
            [x, y, z] = [x, y, z];
        } else {
            [x, y, z] = [x, z, y];
        }
    }
    if (y > x && y > z) {
        if (x > z) {
            [x, y, z] = [y, x, z];
        } else {
            [x, y, z] = [y, z, x];
        }
    }
    if (z > x && z > y) {
        if (x > y) {
            [x, y, z] = [z, x, y];
        } else {
            [x, y, z] = [z, y, x];
        }
    }

print(x, y, z);
