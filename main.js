let amount = document.getElementById("amount")
let interest = document.getElementById("interest")
let salary = document.getElementById("salary")
let years = document.getElementById("pepay")

let monthPay = document.getElementById("month-pay")
let totalPay = document.getElementById("total-pay")
let totalInter = document.getElementById("total-inter")
let afford = document.getElementById("afford")

let warning = document.querySelector(".warning");
let resulte = document.querySelector(".resulte");
let loading = document.querySelector(".loading");

function start(e) {
  resulte.style.display = "none";
  loading.style.display = "block";

  setTimeout(calc, 1000);

  e.preventDefault(); //no submit data
}

function calc() {
  loading.style.display = "none";
  let inter = interest.value / 100 / 12;
  let months = years.value * 12;

  let x = Math.pow(1 + inter, months);
  let monthly = (amount.value * x * inter) / (x - 1);

  if (isFinite(monthly) && salary.value !== "") {
    monthPay.value = monthly.toFixed(2);
    totalPay.value = (monthly * months).toFixed(2);
    totalInter.value = (monthly * months - amount.value).toFixed(2);

    if (salary.value / 10 > monthPay.value) {
      afford.value = "yes";
    } else {
      afford.value = "no";
    }

    resulte.style.display = "block"
  } else {
    warning.style.display = "block"
    setTimeout(() => {
      warning.style.display = "none"
    }, 3000);
  }
};

addEventListener("submit", start);