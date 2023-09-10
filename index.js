// code for date
const currentDate = new Date()
const options = { weekday: 'long'};
const currentDay = currentDate.toLocaleDateString(undefined, options);
const date_display = document.querySelector('[data-testid="currentDayOfTheWeek"]')
date_display.innerHTML = currentDay



// code for time
const time = new Date().getTime();
const date_time = document.querySelector('[data-testid="currentUTCTime"]')
date_time.innerHTML = time 
