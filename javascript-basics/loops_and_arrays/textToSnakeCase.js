function camelize(text) {
  let splitText = text.split("-");
  for (let i = 1; i < splitText.length; i++) {
    let n = splitText[i].length;
    splitText[i] = splitText[i][0].toUpperCase() + splitText[i].slice(1, n);
  }
  return splitText.join("");
}

const camelize1 = function (text) {
  return text
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize1("-webkit-transition"));
