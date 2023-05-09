const apiKey = `24703eb16adf489d3c617deb6f8ac694`;
const searchFormEl = document.querySelector('#formfrommorf');
let searchInputVal = '';
const getWeather = function(data) {
    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${apiKey}`;
    fetch(apiURL).then(response => response.json()
    .then(data => {
        handleWeatherData(data)}))

}
const handleWeatherData = function(data) {
myWeek = {day1: {},
        day2: {},
        day3: {},
        day4: {},
        day5: {}}

myWeek.day1 = data.list[5];
myWeek.day2 = data.list[13];
myWeek.day3 = data.list[21];
myWeek.day4 = data.list[29];
myWeek.day5 = data.list[37];

forcastCreator(myWeek);
}
const forcastCreator = function(data)
{
    let dayOne = {};
    dayOne.temp = data.day1.main.temp;
    dayOne.windSpeed = data.day1.wind.speed;
    dayOne.humidity = data.day1.main.humidity;
    dayOne.icon = data.day1.weather.icon;
    console.log(`Day 1: ${dayOne.temp}*F
    Wind-speed: ${dayOne.windSpeed} mph
    Humidity: ${dayOne.humidity}*F
    ${dayOne.icon}`);

    let dayTwo = {};
    dayTwo.temp = data.day2.main.temp;
    dayTwo.windSpeed = data.day2.wind.speed;
    dayTwo.humidity = data.day2.main.humidity;
    dayTwo.icon = data.day2.weather.icon;
    console.log(`Day 2: ${dayTwo.temp}*F
    Wind-speed: ${dayTwo.windSpeed} mph
    Humidity: ${dayTwo.humidity}*F
    ${dayTwo.icon}`);

    let dayThree = {};
    dayThree.temp = data.day3.main.temp;
    dayThree.windSpeed = data.day3.wind.speed;
    dayThree.humidity = data.day3.main.humidity;
    dayThree.icon = data.day3.weather.icon;
    console.log(`Day 3: ${dayThree.temp}*F
    Wind-speed: ${dayThree.windSpeed} mph
    Humidity: ${dayThree.humidity}*F
    ${dayThree.icon}`);

    let dayFour = {};
    dayFour.temp = data.day4.main.temp;
    dayFour.windSpeed = data.day4.wind.speed;
    dayFour.humidity = data.day4.main.humidity;
    dayFour.icon = data.day4.weather.icon;
    console.log(`Day 4: ${dayFour.temp}*F
    Wind-speed: ${dayFour.windSpeed} mph
    Humidity: ${dayFour.humidity}*F
    ${dayFour.icon}`);

    let dayFive = {};
    dayFive.temp = data.day5.main.temp;
    dayFive.windSpeed = data.day5.wind.speed;
    dayFive.humidity = data.day5.main.humidity;
    dayFive.icon = data.day5.weather.icon;
    console.log(`Day 5: ${dayFive.temp}*F
    Wind-speed: ${dayFive.windSpeed} mph
    Humidity: ${dayFive.humidity}*F
    ${dayFive.icon}`);
}
const handleSearchFormSubmit = function(event) {
    event.preventDefault();
    console.log(searchInputVal)
    searchInputVal = document.querySelector('#search-input').value;
    console.log(searchInputVal)
    getWeather(searchInputVal);
}

searchFormEl.addEventListener('submit',(event) => {handleSearchFormSubmit(event)});
