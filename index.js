// Write your code here
const main = document.querySelector("#main");
main.remove();

const h1 = document.createElement("h1");
h1.id="victory";
h1.innerHTML="H1";
document.body.appendChild(h1);
const newHeader = document.querySelector("h1#victory");
