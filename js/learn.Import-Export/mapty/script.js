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


class Workout {

    date = new Date();
    id = (Date.now() + '').slice(-10);






    constructor(coords, distance, duration) {

        // this.date = ...
        // this.id = ...
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
    }

}


class Running extends Workout {
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration)
        this.cadence = cadence;
        this.clacPace();

    }
    clacPace() {
        //min/km
        this.pace = this.duration / this.distance
        return this.pace
    }

}
class Cycling extends Workout {
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration)
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }
    calcSpeed() {
        //km/h
        this.speed = this.distance / (this.duration / 60)
        return this.speed;
    }
}


const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling = new Running([39, -12], 27, 95, 523);



// let map, mapEvent;
/// aplication arhitecture 

class App {
    #map;
    #mapZoomLevel = 13;
    #mapEvent;
    #workouts = [];

    constructor() {
        // Get user's position
        this._getPosition();

        // Get data from local storage
        // this._getLocalStorage();

        // Attach event handlers
        form.addEventListener('submit', this._newWorkout.bind(this))
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    }
    _getPosition() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(
                this._loadMap.bind(this),
                function () {
                    alert('Could not get your position');
                }
            );

    }
    _loadMap(position) {

        const { latitude } = position.coords;
        const { longitude } = position.coords;

        const coords = [latitude, longitude];
        this.#map = L.map('map').setView(coords, 13);

        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
        //that is for map
        // console.log(map)
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);



        //that is for open to popup
        //handlich clicks on map
        this.#map.on('click', this._showForm.bind(this))

    }
    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }
    _Workout() {
        e.preventDefault();
        //clear input fields
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';


        //Dispaly marker

        console.log(this.#mapEvent);
        const { lat, lng } = mapEvent.latlng;
        L.marker([lat, lng])
            .addTo(map)
            .bindPopup(
                L.popup({
                    maxWidth: 250,
                    maxHeight: 100,
                    autoColose: false,
                    closeOnClick: false,
                    className: 'running-popup',
                })
            )
            .setPopupContent('workout')
            .openPopup();
    }
}

const app = new App();










form.addEventListener('submit', function (e) {
    e.preventDefault();
    //clear input fields
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';


    //Dispaly marker

    console.log(mapEvent);
    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
            L.popup({
                maxWidth: 250,
                maxHeight: 100,
                autoColose: false,
                closeOnClick: false,
                className: 'running-popup',
            })
        )
        .setPopupContent('workout')
        .openPopup();
});


inputType.addEventListener('change', function () {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
})
