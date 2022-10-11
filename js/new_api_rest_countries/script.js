'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');



///////new
const renderCountry = function (data, className = '') {

    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common
        }</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
        <p class="country__row"><span>💰</span>${data.currencies.EUR}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};


const getCountryAndNeighbour = function (country) {
    //

    //AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

    request.send();

    request.addEventListener('load', function () {

        const [data] = JSON.parse(this.responseText);
        console.log(data)
        //reder country
        renderCountry(data);
        //get neighbour country
        const [neighbour] = data.borders;

        if (!neighbour) return
        //AJAX call country 1
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);

        request2.send();
        request2.addEventListener('load', function () {
            const [data2] = JSON.parse(this.responseText)
            renderCountry(data2, 'neighbour')
        })
    });
}
// deci asta de jos tu cand vrei poti apela o tara  si ia iti da 
//si vecini , tank super fain
// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');

setTimeout(() => {
    console.log('1 second')
    setTimeout(() => {
        console.log('2 second')
        setTimeout(() => {
            console.log('3 second')
            setTimeout(() => {
                console.log('4 second')
                setTimeout(() => {
                    console.log('5 second')
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

