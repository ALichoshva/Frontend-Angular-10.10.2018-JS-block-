class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
};

const httpClient = new CustomHttp();

let nameWrapper = document.querySelector('.name-wrapper');
let infoWrapper = document.querySelector('.info-wrapper');

httpClient.get('https://jsonplaceholder.typicode.com/users', (response) => {
    let responseArr = JSON.parse(response);
    console.log(responseArr);

    for (let i = 0; i < responseArr.length; i++) {
        nameWrapper.insertAdjacentHTML('beforeend', `
            <a class="waves-effect waves-light btn" id="${responseArr[i].id}">
                ${responseArr[i].name}
            </a>
            `)
    }

    for (let i = 0; i < responseArr.length; i++) {
        infoWrapper.insertAdjacentHTML('beforeend', `
            <div class="collection d-none" data-id="${responseArr[i].id}">
                <h4 class="title">User information</h1>
                <div class="user-info">
                    <p>name: ${responseArr[i].name}</p>
                    <p>phone: ${responseArr[i].phone}</p>
                    <p>username: ${responseArr[i].username}</p>
                    <p>website: ${responseArr[i].website}</p>
                </div>
            </div>
        `)
    }
})

nameWrapper.addEventListener('click', function(e) {
    let userInfo = document.querySelectorAll('.collection');
    let eTarget = document.querySelectorAll(`div[data-id="${e.target.getAttribute('id')}"]`)[0]

    if(!eTarget.classList.contains('d-none')) {
        eTarget.classList.toggle('d-none');
        return
    }

    for( let i = 0; i < userInfo.length; i++) {
        userInfo[i].classList.add('d-none');
    }

    eTarget.classList.remove('d-none');
})




