var birthDate = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkBtnRef = document.querySelector("#check-number");
var outputBox = document.querySelector("#output-box");

function calculateSum(bdate) {
  bdate = bdate.replaceAll("-","");

  let sum = 0;

  for(i=0; i<bdate.length; i++) {
    sum += Number(bdate.charAt(i));
  }

  return sum;

}

function compareDates(sum, lnum) {
  if(sum%lnum === 0) {
    outputBox.innerHTML = `${lnum} is a lucky number!! 🥳 🥳 🥳`;
  } else {
    outputBox.innerHTML = `${lnum} is not that lucky 😕`;
  }
}

function checkBirthDateIsLucky() {
  var bdate = birthDate.value;
  var lnum = Number(luckyNumber.value);

  if(lnum < 0) {
    outputBox.innerHTML = "Number should be positive";
  } else if(lnum === 0 | lnum === 1) {
    outputBox.innerHTML = "Number should not be 0 or 1";
  } else {
    var sum = calculateSum(bdate);

    if(sum&&lnum)
    compareDates(sum, lnum);
    else
    outputBox.innerHTML = "Please enter both the fields";
  }
}

checkBtnRef.addEventListener("click", checkBirthDateIsLucky);