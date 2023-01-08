import _ from "lodash";
import printMe from "./print.js";

// import your function
import myName from "./myName";
import { functionOne, functionTwo } from "./myModule";

function component() {
    const element = document.createElement("div");
    const btn = document.createElement("button");

    // Lodash, now imported by this script
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    element.classList.add("hello");

    btn.innerHTML = "Click me and check the console!";
    btn.onclick = printMe;

    element.appendChild(btn);

    // element.textContent = myName("Michael");
    // element.textContent = functionOne();
    // element.textContent = functionTwo();

    return element;
}

document.body.appendChild(component());
