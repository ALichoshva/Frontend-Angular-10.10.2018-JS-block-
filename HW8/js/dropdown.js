// задача 5
document.body.addEventListener('click', function(e) {
    let dropdowns = document.getElementsByClassName('dropdown-menu');

    if( e.target.parentElement.className === 'dropdown-item' ) {
        e.target.nextElementSibling.classList.toggle('d-none');
        e.target.innerText === 'Dropdown menu item' ? dropdowns[1].classList.add('d-none') : dropdowns[0].classList.add('d-none');
    } 
})