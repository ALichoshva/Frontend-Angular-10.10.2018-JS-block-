// задача 1
class Component {
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
}

const comp = new Component('span');


// задача 2
class Component1 {
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName); 
    }

    setText(text) {
        this.node.textContent = text;
    }
}

const comp1 = new Component1('span');


// задача 3
class Calculator {
    constructor() {
        this.value = 0;
    }

    getSum(value) {
        this.value += value;
    }

    getDifference(value) {
        this.value -= value;
    }

    getMultiply(value) {
        this.value *= value;
    }

    getDivision(value) {
        this.value /= value;
    }

    get getValue() {
        return this.value;
    }

    set setValue(value) {
        this.value = value;
    }
}

const calc = new Calculator()