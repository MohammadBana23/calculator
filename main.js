//AC function
function clearInput() {
    let inputLabel = document.getElementById("inputLabel");
    inputLabel.innerHTML = 0;
}

function writeNumber() {
    let buttons = document.getElementsByTagName('button');
    console.log(buttons.length);
    for (var i = 1; i < buttons.length; i++) {
        buttons[i].setAttribute('onclick', 'getInputValue()');
        console.log(buttons[i].innerHTML);
    }
}
