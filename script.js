document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("daily").addEventListener("click", function () {
    daily();
    document.getElementById("weekly").style.color = "";
    document.getElementById("monthly").style.color = "";
    document.getElementById("daily").style.color = "white";
  });
  document.getElementById("weekly").addEventListener("click", function () {
    weekly();
    document.getElementById("daily").style.color = "";
    document.getElementById("monthly").style.color = "";
    document.getElementById("weekly").style.color = "white";
  });
  document.getElementById("monthly").addEventListener("click", function () {
    monthly();
    document.getElementById("daily").style.color = "";
    document.getElementById("weekly").style.color = "";
    document.getElementById("monthly").style.color = "white";
  });
  daily();
  document.getElementById("daily").style.color = "white";
});

const hrs = {
  Work: document.getElementById("work-hrs"),
  Play: document.getElementById("play-hrs"),
  Study: document.getElementById("study-hrs"),
  Exercise: document.getElementById("exercise-hrs"),
  Social: document.getElementById("social-hrs"),
  "Self Care": document.getElementById("selfCare-hrs"),
};
const lwhrs = {
  Work: document.getElementById("work-weekly"),
  Play: document.getElementById("play-weekly"),
  Study: document.getElementById("study-weekly"),
  Exercise: document.getElementById("exercise-weekly"),
  Social: document.getElementById("social-weekly"),
  "Self Care": document.getElementById("selfCare-weekly"),
};

function daily() {
  fetch("data.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("error");
      }
      return res.json();
    })
    .then((data) => {
      data.forEach((item) => {
        if (hrs[item.title]) {
          hrs[item.title].textContent = item.timeframes.daily.current + "hrs";
        }
      });

      data.forEach((item) => {
        if (lwhrs[item.title]) {
          lwhrs[item.title].textContent = item.timeframes.daily.previous;
        }
      });

      let lw = document.getElementsByClassName("lw-hr");
      for (let i = 0; i < lw.length; i++) {
        lw[i].style.display = "block";
        lw[i].style.color = "rgb(194, 194, 194)";
      }
    })
    .catch((error) => console.error(error));
}
function weekly() {
  fetch("data.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("error");
      }
      return res.json();
    })
    .then((data) => {
      data.forEach((item) => {
        if (hrs[item.title]) {
          hrs[item.title].textContent = item.timeframes.weekly.current + "hrs";
        }
      });

      data.forEach((item) => {
        if (lwhrs[item.title]) {
          lwhrs[item.title].textContent = item.timeframes.weekly.previous;
        }
      });
      let lw = document.getElementsByClassName("lw-hr");
      for (let i = 0; i < lw.length; i++) {
        lw[i].style.display = "block";
        lw[i].style.color = "rgb(194, 194, 194)";
      }
    })
    .catch((error) => console.error(error));
}
function monthly() {
  fetch("data.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("error");
      }
      return res.json();
    })
    .then((data) => {
      data.forEach((item) => {
        if (hrs[item.title]) {
          hrs[item.title].textContent = item.timeframes.monthly.current + "hrs";
        }
      });

      data.forEach((item) => {
        if (lwhrs[item.title]) {
          lwhrs[item.title].textContent = item.timeframes.monthly.previous;
        }
      });
      let lw = document.getElementsByClassName("lw-hr");
      for (let i = 0; i < lw.length; i++) {
        lw[i].style.display = "block";
        lw[i].style.color = "rgb(194, 194, 194)";
      }
    })
    .catch((error) => console.error(error));
}
