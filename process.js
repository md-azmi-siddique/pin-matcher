const pinGenerate = document.getElementById('pinGenerate');
const showPin = document.getElementById('showPin');

pinGenerate.addEventListener('click', function(){
    let pin = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    console.log(pin);   //debug that pin is showing
    showPin.value = pin;
})

//input from user
const calcButtons = document.querySelectorAll('.button');
const inputBox = document.getElementById('inputFromUser');

// Add an event listener to each calculator button
calcButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the value of the button
    const value = button.textContent;
    console.log(value); //debug

    if (isNaN(value) === false) {
        inputBox.value += value;
    }

    if(value === 'C'){
        inputBox.value = "";
    }

    if(value === '<'){
        inputBox.value = inputBox.value.toString().slice(0,-1);
    }

    

    // Append the value of the button to the input box
  });
});

document.getElementById('submit').addEventListener('click', function(){
    if (showPin.value === inputBox.value && showPin.value !== '') {
        console.log('success'); //debugger
        document.getElementById('successMatch').style.display = 'block';
        document.getElementById('notMatch').style.display = 'none';
      } else {
        console.log('fail'); //debugger
        document.getElementById('notMatch').style.display = 'block';
        document.getElementById('successMatch').style.display = 'none';
      }
})
