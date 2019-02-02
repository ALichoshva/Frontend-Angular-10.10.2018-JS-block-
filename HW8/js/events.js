// задача 1
var btn = document.getElementById('btn-msg');

btn.addEventListener('click', function(e) {
    alert(e.target.dataset.text)
})

// задача 2
btn.addEventListener('mouseover', function(e) {
    e.target.classList.toggle('red');
})

btn.addEventListener('mouseout', function(e) {
    e.target.classList.toggle('red');
    e.target.removeAttribute('class');
})

// задача 3
document.addEventListener('click', function(e) {
    var tagName = 'Tag: ' + e.target.tagName.toLowerCase();
    document.getElementById('tag').innerHTML = tagName;
})

// задача 4
let btnGenerate = document.getElementById('btn-generate');

btnGenerate.addEventListener('click', function(e) {
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Item ' + (document.querySelector('ul').children.length + 1);
    document.querySelector('ul').appendChild(newLi);
})
