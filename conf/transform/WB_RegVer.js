// Transformation of State Code into Strings
// Wrap everything in a function
// variable "input" contains data string passed by binding
(function(inputData) {
    var hexout = Number(inputData).toString(16);
    var Part1 = hexout.slice(0, 1);
    var Part2 = hexout.slice(1, 2);
    var Part3 = hexout.slice(2, 3);
    var out = 'V'+Part1+'.'+Part2+'.'+Part3;

    return out;
})(input)
