"use strict";
const date = prompt("Enter Date (21-03-2025)");
const time = prompt("Enter Time (02.20 PM)");
document.querySelector("#date-time").textContent = `Date: ${date} | Time: ${time}`;

const prize_codes = document.querySelectorAll(".prize-codes");
prize_codes[0].textContent = prompt("1st Prize");
prize_codes[1].textContent = prompt("2nd Prize");
prize_codes[2].textContent = prompt("3rd Prize");
prize_codes[3].textContent = prompt("4th Prize");
prize_codes[4].textContent = prompt("5th Prize");
prize_codes[5].textContent = prompt("6th Prize");
