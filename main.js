var button = document.getElementById("submit");
var userInput = document.getElementById("user-input");



function divide(num) {
	return num / 10;
}


function multiply(num) {
	return num * 5;
}


function isInputEmpty (input) {
	if (input === "") {
		return false 
	} else {
		return true
	}
}

function getUserInput() {
	return userInput.value
}


function displayOutput (value) {
	document.getElementById('output').innerHTML = "The calculated value is: " + value;
}

function calculateOutput() {
	input = getUserInput();
	isValid = isInputEmpty();

	if (isValid && input > 10000) {
		displayOutput(divide(input));
    } else if (isValid && input < 10000)
{
	    displayOutput(multiply(input));
    } else if (isValid === false) {
	    alert('Enter you number, Dude.');
    } else {
    	displayOutput("Here you go, Dude.")
    }
}


button.onclick = calculateOutput;







