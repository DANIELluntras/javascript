console.log('test start')

setTimeout(() => console.log('0 sec timer'), 0)
Promise.resolve('Resolved promsie 1 ').then(res =>
    console.log(res))
Promise.resolve('Resolved promsie 2 ').then(res => {
    for (let i = 0; i < 1000; i++) { }
    console.log(res);
})

console.log("test end")