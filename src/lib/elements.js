export function createDivWithContent(content) {
  let divElement = document.createElement("div");
  divElement.innerHTML = content;

  return divElement;
}

export function appendElementToElement(parent, child) {
  parent.appendChild(child);
}
