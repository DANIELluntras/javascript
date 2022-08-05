//Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
    console.log(`${key}:${value}`);



});

// Set

const hello = new Set(['USD',
    'EUR',
    'USD',
    'EUR',
    'USD',
    'EUR',
    'GBP',
    'USD',
    'EUR',
    'GBP',
    'GBP',
    'GBP',

]);
console.log(hello)

hello.forEach(function(value, key, map) {
    console.log(`${key}:${value} ${map} `)
});