// code for date
const date = new Date()

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear()
let currentDate = `${day} - ${month} - ${year}`
const date_display = document.querySelector('[data-testid="currentDayOfTheWeek"]')
date_display.innerHTML = `Date: ${currentDate}`



// code for time
function updateTime() {
    const date = new Date()
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    const date_time = document.querySelector('[data-testid="currentUTCTime"]')
    date_time.innerHTML = `Time: ${time}`
}
updateTime()
setInterval(updateTime,1000)

