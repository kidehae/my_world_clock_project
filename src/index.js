function updateTime() {
  //losangeles
  let losangelesDate = document.querySelector("#Los_angeles .date");
  losangelesDate.innerHTML = moment().format("MMMM Do YYYY");
  let losangelesTime = document.querySelector("#Los_angeles .time");
  let losangelesTZ = moment().tz("America/Los_angeles");
  losangelesTime.innerHTML = losangelesTZ.format(
    "h:mm:ss [<span class = 'ampm' >]A[</span>]"
  );
  //paris
  let parisDate = document.querySelector("#paris .date");
  parisDate.innerHTML = moment().format("MMMM Do YYYY");
  let parisTime = document.querySelector("#paris .time");
  let parisTZ = moment().tz("Europe/paris");
  parisTime.innerHTML = parisTZ.format(
    "h:mm:ss [<span class = 'ampm' >]A[</span>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
