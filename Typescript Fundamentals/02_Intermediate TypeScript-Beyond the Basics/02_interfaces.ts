// interfaces are just like contracts
// it specifies what needs to get done, but doesn't specify how to do it
// interfaces enables us to create testing version of our code

interface Area {
    area(): number;

};

interface Perimeter {
    perimeter(): number;
}

class Rectangle implements Area, Perimeter {
    length: number = 1;
    width: number = 1;
    
    area(): number {
        return this.width * this.length
    }

    perimeter(): number {
        return 2 * (this.width + this.length)
    }
}

const rect = new Rectangle();
console.log(rect.area())
console.log(rect.perimeter())

type AreaAndPerimeter = Area & Perimeter;

class Circle implements AreaAndPerimeter {
    radius: number = 1;

    area(): number {
        return Math.PI * this.radius ** 2
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius
    }
}

const circ = new Circle();
console.log(circ.area())
console.log(circ.perimeter())

const objectswitharea: Area[] = [circ, rect];
for (let i=0; i < objectswitharea.length; i++) {
    console.log(objectswitharea[i].area())
}

interface CustomerInfo {
    name: string;
}

class Customer implements CustomerInfo {
    name: string;

    constructor(name: string) {
        this.name = name
    }
}

// note: prefer working with interfaces while working with objects