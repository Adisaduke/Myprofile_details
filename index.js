// code for date
const date = new Date()

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear()
let currentDate = `${day} - ${month} - ${year}`
const date_display = document.querySelector('[data-testid="currentDayOfTheWeek"]')
date_display.innerHTML = currentDate



// code for time
const time = new Date().getTime();
const date_time = document.querySelector('[data-testid="currentUTCTime"]')
date_time.innerHTML = time 
