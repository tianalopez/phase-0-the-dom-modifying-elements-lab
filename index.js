// // Write your code here!

// main.remove();

// const newHeader = document.createElement("h1");

// document.querySelector("body").appendChild(newHeader);
// newHeader.setAttribute("id", "victory");
// newHeader.textContent = "Tiana is the champion";


// // This is more about the order of the test, but both are valid
// // newHeader.setAttribute("id", "victory");
// // newHeader.textContent = "Tiana is the champion";
// // document.body.append(newHeader);

// Second attempt
main.remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'TIANA is the champion';
document.body.append(newHeader);
