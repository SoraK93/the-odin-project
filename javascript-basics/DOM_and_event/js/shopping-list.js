const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

const eventList = ["click", "keydown"];
eventList.forEach((event) => {
  button.addEventListener(event, (e) => {
    const item = input.value;
    if (!item) {
      input.focus();
      return;
    }
    input.value = "";
    input.focus();

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = item;

    const btn = document.createElement("button");
    btn.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
  });
});

eventList.forEach((event) => {
  addEventListener(event, (e) => {
    if (e.target.textContent === "Delete") {
      e.target.parentNode.remove();
    }
  });
});
