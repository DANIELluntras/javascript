
const getJSON = function (url, errorMsg = 'Something went wrong') {
    fetch(url).then(response => {

        console.log(response);

        if (!response.ok)

            throw new Error(`Countury not Found${response}`)
        return response.json()
    });
}


const getCountryData = function (country) {
    getJSON(`https://restcountries.com/v3.1/name/${country},
     'Country not found'`
    )
        //Country Number #2#

        .then(data => {

            renderCountry(data[0]);
            const neighbour = data[0].borders[0]

            if (!neighbour) throw new Error('no neighbour found');


            return getJSON(`https://restcountries.com/v3.1/alpha/
        ${neighbour} , 'Country not found'`)

        })

        .then(response => {

            if (!response.ok)

                throw new Error(`Countury not Found ${response.status}`)
            return response.json()
        })



        .then(data => renderCountry(data, 'neighbour'))

        .catch(err => {
            console.log(`
        ${err.message}
        .try again 😂`)
        })



        .finally(() => {
            countriesContainer.style.opacity = 1;
        })

};

btn.addEventListener('click', function () {
    console.log("click_test")
    getCountryData('portugal');
})

getCountryData('portugal');















