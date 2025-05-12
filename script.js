"use strict";
// Style
const dear_text = document.querySelectorAll(".dear-text");
dear_text[0].style = `
  background-color:blue;
  color:white;
  border-top-right-radius: 1.5pc;
  border-bottom-left-radius: 1.5pc;
`;
const prize_amount = document.querySelectorAll(".prize-amount");
prize_amount[0].style.backgroundColor = "red";
prize_amount[1].style.backgroundColor = "green";
prize_amount[2].style.backgroundColor = "#f84260";
prize_amount[3].style.backgroundColor = "#a18400";

// Set current date
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const currentDate = formatDate(new Date());
document.getElementById('footer-date-1').textContent = currentDate;
document.getElementById('footer-date-2').textContent = currentDate;

// Time Change Function
let timeCount = 0;
const TimeNum = document.querySelector(".time-number");
const footerTime = document.querySelector(".footer-time");
function TimeChange() {
  switch (timeCount) {
    case 0:
      TimeNum.textContent = "1.30";
      footerTime.textContent = "1.30 PM";
      timeCount++;
      break;
    case 1:
      TimeNum.textContent = "8.30";
      footerTime.textContent = "8.30 PM";
      timeCount--;
      break;
  }
}
TimeChange();
//Question
function question() {
  // 6th Prize Input Add
  for (let count = 1; count < 101; count++) {
    document.getElementById('fifth-prize-numbers').innerHTML += `<input type="number" class="sixth">`;
  }
}

question();

function submitBtn() {
  // 1st prize
  const firstPrize = document.querySelector(".onest").value.toUpperCase();
  document.querySelector(".winning-number-box").textContent = firstPrize;
  document.querySelector(".consolation-prize").children[2].textContent = firstPrize.slice(3);
  // 2nd prize
  const prize_numbers = document.querySelectorAll(".prize-numbers");

  const twoInput = document.querySelectorAll(".second");
  let twoPrize = [];
  for (let i = 0;i < 10;i++) {
    twoPrize.push(
      twoInput[i].value
    );
  }
  prize_numbers[0].innerHTML = "";
  twoPrize.sort((a,b) => a - b);
  for (let i = 0; i < 10; i++) {
    prize_numbers[0].innerHTML += `
      <div>${twoPrize[i]}</div>
    `;
  }
  console.log(twoPrize);
  // 3rd Prize
  const threeInput = document.querySelectorAll(".thard");
  let threePrize = [];
  for (let i = 0;i < 10;i++) {
    threePrize.push(
      threeInput[i].value
    );
  }  
  prize_numbers[1].innerHTML = "";
  threePrize.sort((a,b) => a - b);
  for (let i = 0; i < 10; i++) {
    prize_numbers[1].innerHTML += `
      <div>${threePrize[i]}</div>
    `;
  }

  // 4th Prize
  const fourInput = document.querySelectorAll(".fourth");
  let fourPrize = [];
  for (let i = 0;i < 10;i++) {
    fourPrize.push(
      fourInput[i].value
    );
  }
  prize_numbers[2].innerHTML = "";
  fourPrize.sort((a,b) => a - b);
  for (let i = 0; i < 10; i++) {
    prize_numbers[2].innerHTML += `
      <div>${fourPrize[i]}</div>
    `;
  }

  // 5th Prize
  const fiveInput = document.querySelectorAll(".fiveth");
  let fivePrize = [];
  for (let i = 0;i < 10;i++) {
    fivePrize.push(
      fiveInput[i].value
    );
  }
  prize_numbers[3].innerHTML = "";
  fivePrize.sort((a,b) => a - b);
  for (let i = 0; i < 10; i++) {
    prize_numbers[3].innerHTML += `
      <div>${fivePrize[i]}</div>
    `;
  }

  // 6th Prize
  const sixInput = document.querySelectorAll(".sixth");
  let sixPrize = [];
  for (let i = 0;i < 100;i++) {
    sixPrize.push(
      sixInput[i].value
    );
  }

  document.querySelector("#fifth-prize-numbers").innerHTML = "";
  sixPrize.sort((a,b) => a - b);
  for (let i = 0; i < 100; i++) {
    document.querySelector("#fifth-prize-numbers").innerHTML += `
      <div>${sixPrize[i]}</div>
    `;
  }
}