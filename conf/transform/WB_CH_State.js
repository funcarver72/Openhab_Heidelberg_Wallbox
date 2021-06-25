// Transformation of State Code into Strings
// Wrap everything in a function
// variable "input" contains data string passed by binding
(function(inputData) {
    var out = ''
    switch (Number(inputData)) {
		case 2.0 :  out = 'A1'; break;
		case 3.0 :  out = 'A2'; break;
		case 4.0 :  out = 'B1'; break;
		case 5.0 :  out = 'B2'; break;
		case 6.0 :  out = 'C1'; break;
		case 7.0 :  out = 'C2'; break;
		case 8.0 :  out = 'Derating'; break;
		case 9.0 :  out = 'E'; break;
		case 10.0 : out = 'F'; break;
		case 11.0 : out = 'ERR'; break;
		default : out = 'Undefined';
    }
    return out
})(input)
