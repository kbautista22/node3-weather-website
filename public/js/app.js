console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const locElem = document.querySelector('#locElem');
const forecastElem = document.querySelector('#forecastElem');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                console.log(data.error);
            } else {
                locElem.textContent=data.location;
                forecastElem.textContent=data.forecast;
            }
        })
    });
})