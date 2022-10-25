const getPosition = function () {
    return new Promise(function (resolve, reject) {

        navigator.geolocation.getCurrentPosition(resolve, reject);



    })
}

const whereAmI = async function (country) {
    const pos = await getPosition();



    const { latitude: lat, longitude: lng } = pas.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    const data = await resGeo.json()
    // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);

    const dat = await res.json();
    console.log(data);
    console.log(res);
    renderCountry(data[0])
}
whereAmI('portugal');
console.log('first')
