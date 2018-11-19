interface IShape {
    draw()
}

class Circle implements IShape {
    constructor() {

    }

    draw() {
        console.log('draw circle')
    }
}

class Rectangle implements IShape {
    constructor() {

    }

    draw() {
        console.log('draw rectangle')
    }
}


class ShapeFactory {
    constructor() {

    }

    static createShape(type): IShape {
        if (type === 'circle') {
            return new Circle()
        } else if (type === 'rectangle') {
            return new Rectangle()
        }
    }
}


class Client {
    static main() {
        var circle = ShapeFactory.createShape('circle')
        circle.draw()
    }
}