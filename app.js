
var minusButton = document.getElementById("minus");
var plusButton = document.getElementById("plus");
var inputField = document.getElementById("input");


minusButton.addEventListener("click", function() {
  
  var currentValue = Number(inputField.value) || 0;
 
  currentValue--;
  
  inputField.value = currentValue;
});

plusButton.addEventListener("click", function() {
  
  var currentValue = Number(inputField.value) || 0;
  
  currentValue++;
  
  inputField.value = currentValue;
});