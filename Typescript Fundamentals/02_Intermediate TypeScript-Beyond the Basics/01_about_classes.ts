// classes make the code combined into one unit
// unit consist of properties and methods
// classes are always in one of two forms
// the first form is called the class
// classes are blueprints
//  to bring a class into existence we create a class instance


class Color {
    r: number = 3;
    g: number = 3;
    b: number = 3;
};

const red = new Color();
red.r

class Dimension {
    length: number;
    width: number;
    // heigth: number;

    // like below we use public it will automatically create the property, uses cases are like for json and working with apis
    constructor(length: number, public height: number) {
        this.length = length;
        this.width = 13;
        // this.heigth = 11;
    }
};

const one = new Dimension(23, 44);

class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    translate(x: number, y: number) {
        this.x += x;
        this.y += y;
    }
};

const p = new Point(2, 3);
p.translate(1, 2);  // x will be 3 and y will be 5
