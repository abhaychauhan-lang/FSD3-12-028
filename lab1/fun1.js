//waf to take any digit (0-9) and return its in word form. eg:0-zero, 1-one, 2-two, 3-three, 4-four, 5-five, 6-six, 7-seven, 8-eight, 9-nine
function digitToWord(digit){
    switch(digit){
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        default:
            return "Invalid digit";
    }
}     
console.log(digitToWord(5)); // Output: five

//2nd method using array
const digitToWordArrow = (digit) => {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return words[digit] || "Invalid digit";
}
console.log(digitToWordArrow(5)); // Output: five