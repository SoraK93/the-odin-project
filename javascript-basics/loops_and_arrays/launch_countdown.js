const output = document.querySelector(".output");

for (let i = 10; i >= 0; i--) {
  const para = document.createElement("p");
  output.append(para);
  para.textContent +=
    i === 0 ? "Blast off!" : i === 10 ? `Countdown ${i}` : `${i}`;
}
