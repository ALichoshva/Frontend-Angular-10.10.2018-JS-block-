function Building() {
    this.name = 'Avrora';
    this.floorAmount = 7;
    this.getFloorAmount = function() {
        return this.floorAmount
        }
    this.setFloorAmount = function(number) {
        return this.floorAmount = number;
    } 
}

function LiveBuilding() {
    Building.call(this);
    this.flatAmountOnTheFloor = 7;
    this.getFloorAmount = function() {
        return {
            floor: this.setFloorAmount(5),
            totalFlats: this.setFloorAmount(5) * this.flatAmountOnTheFloor
        }
    }
}

function ShoppingCenter() {
    Building.call(this);
    this.getShopsOnTheFloor = 5;
    this.getFloorAmount = function() {
        return {
            floor: this.setFloorAmount(3),
            totalShops: this.setFloorAmount(3) * this.getShopsOnTheFloor
        }
    }
}

const liveBuilding = new LiveBuilding();
const shoppingCenter = new ShoppingCenter();

console.log(liveBuilding.getFloorAmount());
console.log(shoppingCenter.getFloorAmount());
console.log(new Building().getFloorAmount())

