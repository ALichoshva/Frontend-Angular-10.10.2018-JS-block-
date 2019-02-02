// задача 1
console.log(document.head)

// задача 2
console.log(document.body)

// задача 3
console.log(document.body.children);

// задача 4
let divChild = document.body.firstElementChild.childNodes;

let divChildNew = Array.prototype.slice.call(divChild);
divChildNew = divChildNew.slice(1, divChildNew.length - 1);
console.log(divChildNew);