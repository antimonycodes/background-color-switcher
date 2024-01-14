const body = document.body;
const statement = document.querySelector("#set-color");

const firstColor = document.querySelector(".one");
const secondColor = document.querySelector(".two");
const thirdColor = document.querySelector(".three");
const fourthColor = document.querySelector(".four");
const fifthColor = document.querySelector(".five");
const sixthcolor = document.querySelector(".six");
const seventhColor = document.querySelector(".seven");
const eighthColor = document.querySelector(".eight");

firstColor.addEventListener(
  "click",
  () => {
    body.style.backgroundColor = "red";
    statement.textContent = "The Color has been set to RED";
  },
  false
);

secondColor.addEventListener(
  "click",
  () => {
    body.style.backgroundColor = "blue";
    statement.textContent = "The Color has been set to BLUE";
  },
  false
);

thirdColor.addEventListener(
  "click",
  () => {
    body.style.backgroundColor = "green";
    statement.textContent = "The Color has been set to GREEN";
  },
  false
);

fourthColor.addEventListener(
  "click",
  () => {
    body.style.backgroundColor = "purple";
    statement.textContent = "The Color has been set to PURPLE";
  },
  false
);

fifthColor.addEventListener(
  "click",
  () => {
    body.style.backgroundColor = "hotpink";
    statement.textContent = "The Color has been set to HOT PINK";
  },
  false
);

sixthcolor.addEventListener(
  "click",
  () => {
    body.style.backgroundColor = "aqua";
    statement.textContent = "The Color has been set to AQUA";
  },
  false
);

seventhColor.addEventListener(
  "click",
  () => {
    body.style.backgroundColor = "yellowgreen";
    statement.textContent = "The Color has been set to YELLOW GREEN";
  },
  false
);

eighthColor.addEventListener(
  "click",
  () => {
    body.style.backgroundColor = "thistle";
    statement.textContent = "The Color has been set to THISTLE";
  },
  false
);
