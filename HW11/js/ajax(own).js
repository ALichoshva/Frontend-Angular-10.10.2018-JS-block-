class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(JSON.parse(xhr.responseText)));
    }
};

const httpClient = new CustomHttp();

let nameWrapper = document.querySelector('.name-wrapper');
let infoWrapper = document.querySelector('.info-wrapper');

httpClient.get('https://jsonplaceholder.typicode.com/users', (response) => {
    console.log(response);

    for (let i = 0; i < response.length; i++) {
        nameWrapper.insertAdjacentHTML('beforeend', `
            <a class="waves-effect waves-light btn" id="${response[i].id}">
                ${response[i].name}
            </a>
            `)
    }

    for (let i = 0; i < response.length; i++) {
        infoWrapper.insertAdjacentHTML('beforeend', `
            <div class="collection d-none" data-id="${response[i].id}">
                <h4 class="title">User information</h1>
                <div class="user-info">
                    <p>name: ${response[i].name}</p>
                    <p>phone: ${response[i].phone}</p>
                    <p>username: ${response[i].username}</p>
                    <p>website: ${response[i].website}</p>
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




