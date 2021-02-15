moment().format("YYYY/MM/DD");
let date = new Date();

const textContainer = document.getElementById("birthdateContainer");
const dateTextField = document.getElementById("birthdate");
const submitButton = document.getElementById("birthdateSubmit");
const validStatus = document.getElementById("validText");
const validPrefix = document.getElementById("dateIs");
const footerText = document.getElementById("footerText");
const clock = document.getElementById("currentTime");
let daysCounterText = document.getElementById("daysCounter");

// Shows the current day and time in the header
function showCurrentTime() {
  clock.innerHTML = moment().format("ddd, Do MMM HH:mm:ss");
}

setInterval(showCurrentTime, 1000);

function chosenDate() {
  const chosenDate = moment(dateTextField.value, "YYYY/MM/DD");
  const chosenDateText = moment(dateTextField.value, "YYYY/MM/DD").format(
    "MMMM Do, YYYY"
  );

  //   sets current date
  const today = moment(new Date());

  //   calculates number of days lived
  let days = today.diff(chosenDate, "days");

  //   Number of days a regular swede live
  const lifespan = 30315;

  //   Calculate percantage
  let daysToLive = Math.ceil((days / lifespan) * 100);

  //   calculates number of lived weeks
  let weeksLived = Math.floor(days / 7);

  //   calculates remaining weeks in a lifetime
  let weeksToLive = Math.floor(30315 / 7 - weeksLived);

  //   Creates the infotext
  daysCounterText.innerHTML = `You were born on ${chosenDateText}.
  You have lived for ${days} days. That is approximately ${daysToLive}%* of your expected lifetime.`;

  let moreInfo = document.createElement("P");
  moreInfo.innerHTML = `So far you have been alive for ${weeksLived} weeks and you have about ${weeksToLive} weeks left to go.`;
  textContainer.appendChild(moreInfo);
}

// Hides elements after submitting a date
function hideElements() {
  dateTextField.style.display = "none";
  submitButton.style.display = "none";
  footerText.style.display = "block";
}
