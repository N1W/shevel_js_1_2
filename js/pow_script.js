alert("START first (POW) script");

function pow (a, b) {
	if (b == 0){
		console.log("wrong power");
		return "Error";
	}
	var result = 1;
	for (b; b > 0; b--) {
		result *= a;
		console.log("result ", result);
	}
	return result;
}

var number = prompt("enter number", '');
var power = prompt("enter number's power", '');
var finalResult = pow(number, power);
console.log("finaleResult = ", finalResult);

alert("END first (POW) script");


