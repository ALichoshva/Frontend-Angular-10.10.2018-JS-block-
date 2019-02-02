// задача 1
const data = new Date();

function car(mark, age) {
    this.mark = mark || 'unknown';
    this.age = age || 0;
    this.getMark = function() {
        return this.mark.charAt(0).toUpperCase() + this.mark.split('').slice(1).join('');
    };
    this.getProdYear = function() {
        return data.getFullYear() - this.age ;
    }
}

const myCar = new car('lexus', 10);

console.log(myCar.getMark());
console.log(myCar.getProdYear());

// задача 2
function strEncr(str) {
    this.getStr = function() {
        return str;
    }

    this.getModifiedStr = function() {
        return str.split('').reverse().join('')
    }
}

const str = new strEncr('kalina');

console.log(str.getStr());
console.log(str.getModifiedStr());