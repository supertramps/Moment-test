const textContainer = document.getElementById("birthdateContainer");
const userBirthdate = document.getElementById("birthdate");
const submitButton = document.getElementById("birthdateSubmit");
const validStatus = document.getElementById("validText");
const validPrefix = document.getElementById("dateIs");
const footerText = document.getElementById("footerText");
const clock = document.getElementById("currentTime");
let daysCounterText = document.getElementById("daysCounter");
//   Number of days a regular swede live
const lifespan = 30315;

// Shows the current day and time in the header
function showCurrentTime() {
  clock.innerHTML = moment().format("ddd, Do MMM, YYYY HH:mm:ss");
}

setInterval(showCurrentTime, 10);

function chosenDate() {
  // Users chosen date converted to moment
  const chosenDate = moment(userBirthdate.value);
  const chosenDateText = moment(userBirthdate.value).format("MMMM Do, YYYY");

  //   sets current date
  const today = moment();

  //   calculates number of days lived
  let days = today.diff(chosenDate, "days");

  //  calculates number of years lived
  let years = today.diff(chosenDate, "years");

  //   Calculate percantage
  let daysToLive = Math.ceil((days / lifespan) * 100);

  //   calculates number of lived weeks
  let weeksLived = Math.floor(days / 7);

  //   calculates remaining weeks in a lifetime
  let weeksToLive = Math.floor(30315 / 7 - weeksLived);

  //   calculates number of slept hours
  let sleepingHours = Math.floor(7 * days);

  //   calculates number of lived hours
  let hoursLived = Math.floor(days * 24);

  // calculates the percentage of slept time in a lifetime
  let sleepPercentage = Math.floor((sleepingHours / hoursLived) * 100);

  //   Creates the infotext
  daysCounterText.innerHTML =
    `You were born on ${chosenDateText}.
  You've been alive for ${days} days (or ${years} years).` +
    ` That's approximately ${daysToLive}%* of your expected lifetime.`;

  let moreInfo = document.createElement("P");
  if (days < 30300) {
    moreInfo.innerHTML = `So far you've been alive for ${weeksLived} weeks and you have somewhere about ${weeksToLive} weeks left to go. Hey, that's a lot of Monday mornings.`;
  } else {
    moreInfo.innerHTML = `So far you've been alive for ${weeksLived} weeks and you've lived longer than your expected lifetime. What's your secret?`;
  }
  textContainer.appendChild(moreInfo);
  let evenMoreInfo = document.createElement("P");
  evenMoreInfo.innerHTML = `The average person sleeps about 7 hours every day, you have slept for ${sleepingHours} hours. That equals to ${sleepPercentage}% of your life.`;
  textContainer.appendChild(evenMoreInfo);
}

// Hides elements after submitting a date
function hideElements() {
  userBirthdate.style.display = "none";
  submitButton.style.display = "none";
  footerText.style.display = "block";
}
