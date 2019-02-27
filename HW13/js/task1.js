function promiseCreator(time, value) {
    return new Promise(function(resolve) {
        setTimeout( function() {resolve(value)}, time )
    })
}

promiseCreator(3000, 'Ok!')
    .then(console.log)