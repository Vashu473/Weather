// const { runMain } = require("module");
window.onload = () => {
  const jsDay = document.getElementById("js-day");
  const jsDate = document.getElementById("js-date");

  // date and day and month work

  const dVal = new Date();

  // date and month work

  const dateV = dVal.getDate();
  const monthV = dVal.getMonth();

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "May",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  jsDate.innerText = `${dateV} ${months[monthV]} `;

  // day work

  const dayV = dVal.getDay();
  const day = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESSDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  jsDay.innerText = `${day[dayV]}`;
};
// api work start
const run = () => {
  const inp = document.getElementById("js-inp").value;
  const data = async (city) => {
    try {
      const api = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e838640741e8181aa7117e89c6d7639a`
      );
      const result = await api.json();

      // storing value
      const cityN = result.name;
      const counN = result.sys.country;
      const temp = Math.round(result.main.temp - 273.15);

      // storing value over
      // location
      const loc = document.getElementById("js-loc");

      if (counN == undefined) {
        loc.innerText = `${cityN} Unknown`;
      } else {
        loc.innerText = `${cityN} ${counN}`;
      }
      // temperature
      const tem = document.getElementById("js-tem");
      tem.innerHTML = `${temp} &deg; C`;
      const w = document.getElementById("js-w");
      if (temp <= 10) {
        w.innerHTML = `<i class="fas fa-cloud-rain "></i>`;
      } else if (temp <= 20) {
        w.innerHTML = `<i class="fas fa-cloud "></i>`;
      } else {
        w.innerHTML = ` <i class="fas fa-sun col"></i> `;
      }
      // putting value
    } catch (error) {
      console.log(error);
    }
  };
  data(inp);
};
