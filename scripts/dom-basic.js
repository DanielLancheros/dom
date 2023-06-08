const bodyElement = document.body; // Document Node -> Body Node

// Append
bodyElement.append("Hello Universe");

// Append Child
const divElement = document.createElement("div");
const strongElement = document.createElement("strong");
strongElement.innerText = "Hello Div";
divElement.append(strongElement);
bodyElement.append(divElement);

divElement.remove();
