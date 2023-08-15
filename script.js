const button = document.getElementById('get-results-btn');
const resultsWrapper = document.getElementById('results-wrapper');

const weatherInfo = [];

button.addEventListener('click', ()=>{
    const cityInput = document.getElementById('city-input').value;
    const temperatureInput = document.getElementById('temperature-input').value;
    function showRainStatus(){
        const checkbox = document.getElementById('checkbox');
        const rainStatus = checkbox.checked ? "it is going to rain" : "it is not going to rain";
        const backgroundColor = document.body;
        if(checkbox.checked){
            backgroundColor.setAttribute('class', 'blue-background-color');
        }
        else{
            backgroundColor.setAttribute('class', 'yellow-background-color');
        };
    
        return rainStatus;
    };

    const weatherForecastForSpecificCity = {
        city: cityInput,
        temperature: temperatureInput,
        isGoingToRain: showRainStatus()
    };

    weatherInfo.push(weatherForecastForSpecificCity);


    weatherInfo.forEach(()=>{
        resultsWrapper.innerHTML = "";

        const weatherForecastInfo = document.createElement('div');
        weatherForecastInfo.setAttribute('class', 'weather-info-for-specific-city');
        weatherForecastInfo.innerHTML = `In ${cityInput}, the temperature is ${temperatureInput}\u00B0 and ${showRainStatus()}.`;
        resultsWrapper.appendChild(weatherForecastInfo);
    });
});