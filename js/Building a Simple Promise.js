

//Building a Simple Promise
//episodul 259
const lotterypromis = new Promise(function (resolve, reject) {
    console.log('lotter draw is happening ')
    // if (Math.random() >= 0.5) {
    //   resolve("You Win")
    // } else {
    //   reject('You lost money')
    // };
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve("You Win")
        } else {
            reject(new Error('You lost money'))
        }
    }, 2000)
})
lotterypromis.then(res => console.log(res)).catch
    (err => console.error(err));
//promising  setTimeout
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000)
    })
}

wait(2)
    .then(() => {
        console.log('i wait for  1 seconds')
        return wait(1)
    })
    .then(() => {
        console.log('i wait for  2 seconds')
        return wait(1)
    })
    .then(() => {
        console.log('i wait for  3 seconds')
        return wait(1)
    })
    .then(() => {
        console.log('i wait for  4 seconds')
        return wait(1)
    })
    .then(() => console.log('i wait for 5 second'))

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('PROBLEM!').catch(x => console.log(x)))

