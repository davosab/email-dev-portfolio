const
  daysOutput = document.getElementById("days"),
  hoursOutput = document.getElementById("hours"),
  minutesOutput = document.getElementById("minutes"),
  secondsOutput = document.getElementById("seconds"),

  /*** SET BOOTCAMP DATE HERE **************************************************/
  bootcampDate = new Date("2023-08-09T00:00:00+02:00"),
  /*****************************************************************************/

  secondInMs = 1000,
  minuteInMs = secondInMs * 60,
  hourInMs = minuteInMs * 60,
  dayInMs = hourInMs * 24;

updateCountdown = () => {
  const
    currentDate = new Date(),
    timeDiffInMs = bootcampDate - currentDate,

    days = Math.floor(timeDiffInMs / dayInMs),
    hours = Math.floor((timeDiffInMs % dayInMs) / hourInMs),
    minutes = Math.floor((timeDiffInMs % hourInMs) / minuteInMs),
    seconds = Math.floor((timeDiffInMs % minuteInMs) / secondInMs);

  daysOutput.innerHTML = days;
  hoursOutput.innerHTML = hours;
  minutesOutput.innerHTML = minutes;
  secondsOutput.innerHTML = seconds;
}
updateCountdown();
setInterval(updateCountdown, 1000);
  
