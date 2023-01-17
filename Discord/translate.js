const runButton = document.querySelector("#submit");
const output = document.querySelector(".output-text");
const textInForm = document.querySelector(".input-text");

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function translate(e) {
    e.preventDefault();

    const tempString = textInForm.value;
    let newString = "";
    for (const character of tempString) {
        if (isLetter(character)) {
            newString = `${newString}:regional_indicator_${character}:`;
        } else {
            newString += character;
        }
        newString += " ";
    }
    output.textContent = newString.toLowerCase();
}

runButton.addEventListener("click", translate);
