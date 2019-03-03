function Furniture() {
    this.name = 'Arman';
    this.price = 3000;
}

Furniture.prototype.getInfo = function() {
    return {
        name: this.name,
        price: this.price
    }
} 

let officeFurniture = new Furniture();
let homeFurniture = new Furniture();
let furniture = new Furniture();

officeFurniture.haveCompTable = true;
homeFurniture.haveShoeStand = false;

officeFurniture.__proto__ = Object.create(Furniture.prototype)
officeFurniture.__proto__.constructor = officeFurniture
officeFurniture.__proto__.getInfo = function() {
    return {
            name: this.name,
            price: this.price, 
            haveCompTable: true
            }
}


homeFurniture.__proto__ = Object.create(Furniture.prototype)
homeFurniture.__proto__.constructor = officeFurniture
homeFurniture.__proto__.getInfo = function() {
    return {
        name: this.name,
        price: this.price, 
        haveShoeStand: true
    }
}

console.log(officeFurniture.getInfo());
console.log(homeFurniture.getInfo());
console.log(furniture.getInfo());
