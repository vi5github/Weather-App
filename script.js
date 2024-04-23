// http://api.weatherapi.com/v1/current.json?key=f6f99450382a4bfa84390735242304&q=Mumbai&aqi=no


const temperaturefield = document.querySelector(".temp")
const locationField = document.querySelector(".time_location p")
const dateandtimeField = document.querySelector(".time_location span")
const conditionField = document.querySelector(".condition p")
const searchField = document.querySelector(".search_area")
const form = document.querySelector('form')


form.addEventListener('submit', searchForLocation);
let target = `Lucknow`

const fetchDetails = async (targetLocation)=>{

    let url = `http://api.weatherapi.com/v1/current.json?key=f6f99450382a4bfa84390735242304&q=${targetLocation}&aqi=no`

    const res = await fetch(url);

    const data = await res.json();

    console.log(data);

    let locationName = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_c
    let _conditon = data.current.condition.text

    updateDetails(temp, locationName, time, _conditon)
}

function updateDetails(temp, locationName, time, _conditon){

    let splitDate = time.split(' ')[0]
    let splitTime = time.split(' ')[1]

    let currentDay = getDayName(new Date(splitDate).getDay())
    

    temperaturefield.innerText = temp;
    locationField.innerText = locationName
    dateandtimeField.innerText = `${splitTime} ${currentDay} ${splitDate}`
    conditionField.innerText = _conditon

}

function searchForLocation(e){
    e.preventDefault()

    target = searchField.value

    fetchDetails(target)
}

function getDayName(number){
    let d = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
    return d[number]
}

fetchDetails(target)
