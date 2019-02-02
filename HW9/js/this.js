// задача 1
const rectangle = {
    width: 20,
    height: 20,
    getSquare: function() { return this.width * this.height}
}

console.log(rectangle.getSquare())

// задача 2
const price = {
    price: 10,
    discount: '15%',
    getPrice: function() { return this.price },
    getPriceWithDiscount: function() { return this.price - this.price * parseInt(this.discount) / 100 }
}

console.log(price.getPrice())
console.log(price.getPriceWithDiscount())

// задача 3
const height = {
    height: 10,
    getNewHeight() {
        return this.height ++
    }
}

console.log(height.height)
height.getNewHeight()
console.log(height.height)

// задача 4
const numerator = {
    value: 1,
    double: function () { this.value *= 2; return this },
    plusOne: function () { this.value++; return this },
    minusOne: function () { this.value--; return this }
}

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value)

// задача 5
const products = {
    price: 20,
    amount: 100,
    getTotalPrice: getTotalPrice
} 

function getTotalPrice() {
    return this.price * this.amount;
}
console.log(products.getTotalPrice())

// задача 6
const details = {
    price: 30,
    amount: 200
}
console.log(getTotalPrice.call(details))

// задача 7
let sizes = {
    width: 5, 
    height: 10
};

getSquare = function () {return this.width * this.height};

console.log(getSquare.call(sizes))

// задача 8
let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element); 
let getElementHeightRes = getElementHeight();
console.log(getElementHeightRes)




