(function ()  {
	// i will not be using data-* for operators because of + = button.
	"use strict";

	let isFirstNum = true;
	let firstNum = "";
	let secondNum = "";
	let operator = "";

	function evaluateInput(value) {
		switch(value) {
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
			case "0":
			case ".":
				if (isFirstNum) {
					firstNum += value;
					display.innerHTML = firstNum;
				} else {
					secondNum += value;
					display.innerHTML = secondNum;
				}
				break;
			case "+<br>=":
			case "-":
			case "x":
			case "/":
				// switches += and x to be used in the parser.
				value = updateOperator(value);
				if (isFirstNum) {
					isFirstNum = false;
					operator = value;
				} else {
					firstNum = eval(firstNum + operator + secondNum);
					secondNum = "";
					operator = value;
					display.innerHTML = firstNum;
				}
				break;
			case "C":
				isFirstNum = true;
				operator = "";
				firstNum = "";
				secondNum = "";
				display.innerHTML = firstNum;
				break;
			default:
				display.innerHTML = "error";
		}
	}

	function updateOperator(value) {
		switch(value) {
			case "+<br>=":
				return "+";
			case "x":
				return "*";
			default:
				return value;

		}
	}

	function init() {
		// i will not be using data-* for numbers because i want data representation separate from the view.
		const display = document.getElementById("display");

		const buttons = document.getElementsByClassName("button");

		// calculator logic
		// states of the calculator:
		// 	first operation has not been put in
		// 	first operation has been put in
		//
		// we need to know 
		// 	what the operator is
		// 	what the first number is
		//
		// 	we might not need these two
		// 	what the second number is
		// 	what the total is
		for (let i = 0; i < buttons.length; i++) {
			let currButton = buttons[i];
			currButton.addEventListener("click", function() { 
				evaluateInput(currButton.innerHTML);
			});
		}
	}
	
	document.addEventListener("DOMContentLoaded", init, false);
})();
