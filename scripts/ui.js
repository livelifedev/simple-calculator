function getButton(id) {
    return document.getElementById(id);
}
function Digit(id) {
    var digit = getButton(id);
    digit.onclick = function() {
        calculator.digit(id);
        disabler();
    }
}
function disabler() {
    buttonAdd.disabled = false;
    buttonSub.disabled = false;
    buttonDiv.disabled = false;
    buttonMulti.disabled = false;
}

//CALCULATOR BUTTONS
var button0 = new Digit("0");
var button1 = new Digit("1");
var button2 = new Digit("2");
var button3 = new Digit("3");
var button4 = new Digit("4");
var button5 = new Digit("5");
var button6 = new Digit("6");
var button7 = new Digit("7");
var button8 = new Digit("8");
var button9 = new Digit("9");
var buttonDot = new Digit(".");

var buttonAdd = getButton("add");
buttonAdd.onclick = function() {
    calculator.add();
    disabler();
    buttonAdd.disabled = true;
}
var buttonSub = getButton("sub");
buttonSub.onclick = function() {
    calculator.sub();
    disabler();
    buttonSub.disabled = true;
}
var buttonDiv = getButton("div");
buttonDiv.onclick = function() {
    calculator.div();
    disabler();
    buttonDiv.disabled = true;
}
var buttonMulti = getButton("multi");
buttonMulti.onclick = function() {
    calculator.multi();
    disabler();
    buttonMulti.disabled = true;
}
var buttonClr = getButton("clr");
buttonClr.onclick = function() {
    calculator.clear();
    disabler();
}
var buttonCalc = getButton("calculate");
buttonCalc.onclick = function() {
    calculator.calc();
    disabler();
}


