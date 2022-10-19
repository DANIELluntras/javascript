
const whereAmi = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        //#1

        .then(res => {
            if (!res.ok) throw new Error(`Problem 
        geo coding ${res.status}`);
            console.log(res);
            return res.json();
        })
        //#2

        .then(data => {
            console.log(data);
            console.log(`you are in ${data.city} , ${data.country}`)

            return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
        })
        //#3

        .then(response => {
            if (!response.ok) throw new Error(`Country not found(${response.status})`)
            console.log(response)
        })


        .catch(err => console.error(`${err.message} 😡`))
}
whereAmi(52.508, 13.381)
// whereAmi(19.037, 72.873)
// whereAmi(- 33.933, 18.474)
