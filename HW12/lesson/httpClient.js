class HttpClient {
    /**
     * 
     * @param {String} url 
     * @param {Function} callback
     */
    get(url) {
        return new Promise((res, rej) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();

            xhr.addEventListener('load', () => res(JSON.parse(xhr.responseText)));
            xhr.addEventListener('error', () => rej({status: xhr.status, url: url}));
        })
    }

     /**
     * 
     * @param {String} url 
     * @param {any} data
     * @param {Function} callback
     */
    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}