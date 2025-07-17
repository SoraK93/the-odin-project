let navLink = document.getElementById('nav');
navLink.href = "https://www.wikipedia.org";
navLink.textContent = "Navigate to Wikipedia";

let btn = document.getElementById("changeBackground");
btn.addEventListener("click", () => {
    document.body.style.backgroundColor = "fuchsia";
})