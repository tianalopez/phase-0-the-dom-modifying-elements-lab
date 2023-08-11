// Write your code here!

main.remove();

const newHeader = document.createElement("h1");
// document.body.append(newHeader);
newHeader.setAttribute("id", "victory");
document.querySelector("body").appendChild(newHeader);
newHeader.textContent = "Tiana is the champion";
