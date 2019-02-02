// задача 1 
function isParent(parent, child) {
    let parentName = parent.tagName;
    if(parent === child.closest(parentName)) {
        return true
    } else {
        return false
    }
}

console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

// задача 2
let links = document.getElementsByTagName('a');

function getLinksByLocation(links) {
    let searchLinks = [];
    for( let i = 0; i < links.length; i++ ) {
        if(links[i].closest('ul')) 
            searchLinks.push(links[i])
    }

    return searchLinks
}

console.log(getLinksByLocation(links));

// задача 3
let getPrevUlElem = document.querySelector('ul').previousElementSibling
let getNextUlElem = document.querySelector('ul').nextElementSibling
console.log(getPrevUlElem);
console.log(getNextUlElem);

// задача 4
console.log(document.querySelectorAll('li').length)
