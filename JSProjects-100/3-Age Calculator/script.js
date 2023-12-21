"use strict";

var btn = document.getElementById("btn-age");
var age = document.querySelector("#age");
var result = document.querySelector("#result");
var childIcon = document.querySelector("#icon-child");
var calculatorIcon = document.getElementById("icon-age");
var teenIcon = document.getElementById("icon-teen");
var menIcon = document.getElementById("icon-men");
var oldIcon = document.getElementById("icon-old");

btn.addEventListener("click", getAge);

function getAge(e) {
  e.preventDefault();
  var bdate = age.value;

  var calage = calculateAge(bdate);
  if (calage < 0) {
    result.innerText = `You are not born yet try to born`;
  } else {
    result.innerText = `Your Age is ${calage} years old`;
  }

  if (calage < 18) {
    console.log(calage);
    calculatorIcon.style.display = "none";
    teenIcon.style.display = "none";
    menIcon.style.display = "none";
    oldIcon.style.display = "none";
    childIcon.style.display = "block";
  } else if (calage >= 18 && calage <= 30) {
    calculatorIcon.style.display = "none";
    menIcon.style.display = "none";
    oldIcon.style.display = "none";
    childIcon.style.display = "none";
    teenIcon.style.display = "block";
  } else if (calage >= 30 && calage <= 50) {
    calculatorIcon.style.display = "none";
    oldIcon.style.display = "none";
    childIcon.style.display = "none";
    teenIcon.style.display = "none";
    menIcon.style.display = "block";
  } else if (calage >= 50) {
    calculatorIcon.style.display = "none";
    childIcon.style.display = "none";
    teenIcon.style.display = "none";
    menIcon.style.display = "none";
    oldIcon.style.display = "block";
  }
  //   const crntdate = new Date();
  //   const bdate = new Date(age);
  //   console.log(bdate);
}

function calculateAge(bdate) {
  const crntdate = new Date();
  const birthdate = new Date(bdate);

  var crntage = crntdate.getFullYear() - birthdate.getFullYear();
  return crntage;
}
