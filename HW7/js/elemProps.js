// задача 1
let paragraph = document.querySelector('p');
console.log(paragraph.textContent)

// задача 2
function getNodeInfo(node) {
    let obj = {};
    obj.type = node.nodeType;
    obj.name = node.nodeName;
    obj.childAmount = node.childNodes.length ? node.childNodes.length : 0;

    return obj
}

console.log(getNodeInfo(document.querySelector('article')));

// задача 3
function getTextFromUl() {
    let linkText = [];
    let linkTextAll = document.querySelectorAll('ul a');
    for( let i = 0; i < linkTextAll.length; i++ ) {
        linkText.push(linkTextAll[i].textContent)
    }

    return linkText
}

console.log(getTextFromUl());

// задача 4
let textNodes = document.querySelector('p').childNodes;

for( let i = 0; i < textNodes.length; i++ ) {
    if(textNodes[i].nodeType === 3) {
        textNodes[i].data = '-text-'
    }
}

console.log(document.querySelector('p'))
// _______________________________________________________________

// задача 1
let ul = document.querySelector('ul');

ul.setAttribute('class', 'list')

// задача 2
let link = document.querySelector('span').nextElementSibling;

link.setAttribute('id', 'link')

console.log(link)

// задача 3
let li = document.querySelector('ul').children

for( let i = 0; i < li.length; i += 2 ) {
    li[i].setAttribute('class', 'item')
}

// задача 4
let allLinks = document.querySelectorAll('a');

for( let i = 0; i < allLinks.length; i++ ) {
    allLinks[i].setAttribute('class', 'custom-link')
}

// _________________________________________________________________

// задача 1
let ulElem = document.querySelector('ul');

function getNewLi() {
    let liAmount = ulElem.children.length + 1
    return ulElem.insertAdjacentHTML('beforeend', `<li class="new-item">item ${liAmount}</li>`);
}

getNewLi()
getNewLi()
getNewLi()

// задача 2
let linksInUl = document.querySelectorAll('ul a');

for( let i = 0; i < linksInUl.length; i++ ) {
    linksInUl[i].insertAdjacentHTML('beforeend', '<strong></strong>')
}

// задача 3
let picture = document.createElement('img');

document.body.insertBefore(picture, document.body.firstChild);
document.querySelector('img').setAttribute('src', 'img/iphone8.jpg');
document.querySelector('img').setAttribute('alt', 'iphone-8');

// задача 4
let mark = document.querySelector('mark')
mark.insertAdjacentHTML('beforeend', 'green');
mark.classList.toggle('green');

// задача 5
let liAll = document.getElementsByTagName('li');
let liArr = [];
for( let i = 0; i < li.length; i++ ) {
    liArr.push(liAll[i])
}

function getLiReverse() {
    liArr.reverse()

    document.querySelector('ul').innerHTML = '';

    for( let i = 0; i < liArr.length; i++ ) {
        document.querySelector('ul').appendChild(liArr[i])
    }
}

