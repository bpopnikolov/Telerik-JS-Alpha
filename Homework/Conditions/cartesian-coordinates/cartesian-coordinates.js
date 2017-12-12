const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static findPointPosition(point) {
        if (point.x > 0 && point.y > 0) {
            return 1;
        }
        if (point.x === 0 && (point.y > 0 || point.y < 0)) {
            return 5;
        }
        if ((point.x > 0 || point.x < 0) && point.y === 0) {
            return 6;
        }
        if (point.x > 0 && point.y < 0) {
            return 4;
        }
        if (point.x < 0 && point.y > 0) {
            return 2;
        }
        if (point.x < 0 && point.y < 0) {
            return 3;
        }
        return 0;
    }
}

const p= new Point(+gets(), +gets());
// console.log(p);
print(Point.findPointPosition(p));
