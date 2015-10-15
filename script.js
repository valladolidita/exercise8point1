/* Instructions: create a function that can be reused in different situations on the same HTML page. */

function multiplyingThreeNumbers(a,b,c) {
	var result = a * b * c;
	return result;

}

var x = multiplyingThreeNumbers(2,25,100);
alert(x);

var x = multiplyingThreeNumbers(1,4,6);
alert(x);

var x = multiplyingThreeNumbers(40,60,80);
alert(x);