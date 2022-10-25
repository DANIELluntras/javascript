
const getPosition = function () {
    return new Promise(function (resolve, reject) {

        navigator.geolocation.getCurrentPosition(resolve, reject);



    })
}

const whereAmI = async function (country) {
    try {
        const pas = await getPosition();
        const { latitude: lat, longitude: lng } = pas.coords;

        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)

        // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))


        ///Country data 
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
        if (!resGeo.ok) throw new Error('Problem getting country')
        const data = await res.json();
        console.log(data);
        console.log(res);
        renderCountry(data[0])
        return `you are in ${dataGeo.city},${dataGeo.country}`
    } catch (err) {
        console.error("errrrrrrrooooooooooroooooorrrrrrr");
        renderError(`${err.message} `);
        /// reject promise returned from async function 
        throw err;
    }
}

    // const city = whereAmI();
    // console.log(city);
    // whereAmI().then(city => console.log(city).catch(err => console.error(`2:${err.message}`)).finally(() => console.log("2:finished getting location")))
    // console.log('first')

    (async function () {
        try {
            const city = await whereAmI();
            console.log(`2:${city}`)
        } catch (err) {
            console.error(`2:${err.message}`)
        }
        console.log('3:finished getting location')
    })();


