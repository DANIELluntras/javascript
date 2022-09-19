'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//navigator
if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
        //that is for map 

        const coords = [latitude, longitude]


        const map = L.map('map').setView(coords, 13);
        // console.log(map)
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


        //that is for open to popup 

        map.on('click', function (mapEvent) {
            console.log(mapEvent);
            const { lat, lng } = mapEvent.latlng
            L.marker([lat, lng])
                .addTo(map)
                .bindPopup(L.popup({
                    maxWidth: 250,
                    maxHeight: 100,
                    autoColose: false,
                    closeOnClick: false,
                    className: 'running-popup'
                }))
                .setPopupContent('workout')
                .openPopup();
        })
    },
        function () {
            alert("hey this is first line or code")
        })





