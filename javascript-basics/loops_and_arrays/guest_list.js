const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

let guest;
for (guest of people) {
  if (guest === "Phil" || guest === "Lola") {
    refused.textContent += `${guest}, `;
  } else {
    admitted.textContent += `${guest}, `;
  }
}

admitted.textContent =
  admitted.textContent.slice(0, admitted.textContent.length - 2) + ".";
refused.textContent =
  refused.textContent.slice(0, refused.textContent.length - 2) + ".";
