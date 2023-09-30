const pinGenerate = document.getElementById("pinGenerate");
const showPin = document.getElementById("showPin");

pinGenerate.addEventListener("click", function () {
  let pin = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  console.log(pin); //debug that pin is showing
  showPin.value = pin;
});

//input from user
const calcButtons = document.querySelectorAll(".button");
const inputBox = document.getElementById("inputFromUser");


calcButtons.forEach((button) => {
  button.addEventListener("click", function () {
    
    const value = button.textContent; // Get the value of the button
    console.log(value); //debug

    if (isNaN(value) === false) {
      inputBox.value += value;
    }

    if (value === "C") {  //clear the whole input box
      inputBox.value = "";
    }

    if (value === "<") {  //delete the last element while pressing'<'
      inputBox.value = inputBox.value.toString().slice(0, -1);
    }
    // Append the value of the button to the input box
  });
});

document.getElementById("submit").addEventListener("click", function () {
  if (showPin.value === inputBox.value && showPin.value !== "") {
    console.log("success"); //debugger
    document.getElementById("successMatch").style.display = "block"; //show success tag
    document.getElementById("notMatch").style.display = "none"; //hide the fail tag
  } else {
    console.log("fail"); //debugger
    document.getElementById("notMatch").style.display = "block";  //show the fail tag
    document.getElementById("successMatch").style.display = "none"; //hide the success tag
  }
});
