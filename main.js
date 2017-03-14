let zeroTo49 = 20;
let fiftyTo149 = 50;
let onefiftyTo299 = 100;
let threehundredPlus = 150;
let inchesMessage = 'Please enter snow in inches';
let inches = prompt(inchesMessage);
let widthInFeetMessage = 'Please enter area width in feet';
let widthInFeet = prompt(widthInFeetMessage);
let lengthInFeetMessage = 'Please enter area length in feet';
let lengthInFeet = prompt(lengthInFeetMessage);
let depthInFeet = inches / 12;
let cubicFeet = widthInFeet * lengthInFeet * depthInFeet;
let roundedCubicFeet = Math.round(cubicFeet);
let roundedCubicFeetMessage = 'The amount of cubic feet to be cleared = ' + roundedCubicFeet;
console.log(roundedCubicFeetMessage);
if (roundedCubicFeet > 0 && roundedCubicFeet < 50) {quotePrice = zeroTo49;}
if (roundedCubicFeet > 49 && roundedCubicFeet < 150) {quotePrice = fiftyTo149;}
if (roundedCubicFeet > 149 && roundedCubicFeet < 300) {quotePrice = onefiftyTo299;}
if (roundedCubicFeet > 299) {quotePrice = threehundredPlus;}
console.log(quotePrice);
let element = document.getElementById("main");
element.innerHTML = 'Quote price: $' + quotePrice;
let element2 = document.getElementById("main2");
element2.innerHTML = 'Cubic feet: ' + roundedCubicFeet;
