//AC function
function clearInput() {
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML = "";
}

function button7() {
    let button7 = document.getElementsByTagName('button')[2].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += button7;
}
function button8() {
    let button8 = document.getElementsByTagName('button')[3].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += button8;
}
function button9() {
    let button9 = document.getElementsByTagName('button')[4].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += button9;
}
function buttonMulti() {
    let buttonMulti = document.getElementsByTagName('button')[5].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += buttonMulti;
}
function button4() {
    let button4 = document.getElementsByTagName('button')[6].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += button4;
}
function button5() {
    let button5 = document.getElementsByTagName('button')[7].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += button5;
}
function button6() {
    let button6 = document.getElementsByTagName('button')[8].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += button6;
}
function buttonMin() {
    let buttonMin = document.getElementsByTagName('button')[9].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += buttonMin;
}
function button1() {
    let button1 = document.getElementsByTagName('button')[10].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += button1;
}
function button2() {
    let button2 = document.getElementsByTagName('button')[11].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += button2;
}
function button3() {
    let button3 = document.getElementsByTagName('button')[12].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += button3;
}
function buttonPlus() {
    let buttonPlus = document.getElementsByTagName('button')[13].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += buttonPlus;
}
function button0() {
    let button0 = document.getElementsByTagName('button')[14].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += button0;
}
function buttonDot() {
    let buttonDot = document.getElementsByTagName('button')[15].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += buttonDot;
}
function buttonDiv() {
    let buttonDiv = document.getElementsByTagName('button')[1].innerHTML;
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML += buttonDiv;
}
function buttonAssign() {
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML = eval(inputLabel.innerHTML);
}
