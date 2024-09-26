function updateTime() {
  //losangeles

  let losangelesDate = document.querySelector("#Los_angeles .date");
  if (losangelesDate) {
    losangelesDate.innerHTML = moment().format("MMMM Do YYYY");
    let losangelesTime = document.querySelector("#Los_angeles .time");
    let losangelesTZ = moment().tz("America/Los_angeles");
    losangelesTime.innerHTML = losangelesTZ.format(
      "h:mm:ss [<span class = 'ampm' >]A[</span>]"
    );
  }
  //paris
  let parisDate = document.querySelector("#paris .date");
  if (parisDate) {
    parisDate.innerHTML = moment().format("MMMM Do YYYY");
    let parisTime = document.querySelector("#paris .time");
    let parisTZ = moment().tz("Europe/paris");
    parisTime.innerHTML = parisTZ.format(
      "h:mm:ss [<span class = 'ampm' >]A[</span>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function dispalyTime(events) {
  if (events.target.value !== "") {
    let cityTZ = events.target.value;
    if (cityTZ === "yourCity") {
      cityTZ = moment.tz.guess();
    }
    let cityInfo = moment.tz(cityTZ);
    let cityName = cityTZ.replace("_", " ").split("/");
    let newCity = document.querySelector("#myCity");
    newCity.innerHTML = `<div class="city">
          <div>
            <h2>${cityName[1]}</h2>
            <div class="date">${cityInfo.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityInfo.format(
            "h:mm:ss [<span class = 'ampm' >]A[</span>]"
          )}</div>
        </div>`;
  }
}
let selectedCity = document.querySelector("#selection");
selectedCity.addEventListener("change", dispalyTime);
