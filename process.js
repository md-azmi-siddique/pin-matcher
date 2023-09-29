const pinGenerate = document.getElementById('pinGenerate');
const showPin = document.getElementById('showPin');

pinGenerate.addEventListener('click', function(){
    let pin = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    console.log(pin); //debug that pin is showing
    showPin.value = pin;
})