const changeText = () => {
  const btn = document.querySelector("#inline");
  btn.textContent = "I changed because of an inline event handler";
};

const btnText = (e) => {
    const btn = e.target;
    btn.textContent = "I changed because of an event handler property.";
}

const button = document.querySelector("#eHandler");
button.onclick = btnText;

const addEvent = document.querySelector("#addEvent");
addEvent.addEventListener("click", (e) => {
    const btn = e.target;
    btn.textContent = "I changed because of an event listener.";
})
const alertText = () => {
	alert('Will I alert?');
}
addEvent.addEventListener('click', alertText);
addEvent.removeEventListener("click", alertText);

document.querySelector("input").addEventListener("keydown", (e) => {
    console.log("key: " + e.key);
    console.log("code: " + e.code);
})
