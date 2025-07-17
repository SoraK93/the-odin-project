document.addEventListener("keydown", (e) => {
    let element = document.querySelector("p");
    let a = "KeyA";
    let s = "KeyS";
    let d = "KeyD";
    let w = "KeyW";

    switch (e.code) {
        case a:
            element.textContent = "Left";
            break
        case s:
            element.textContent = "Down";
            break
        case d:
            element.textContent = "Right";
            break
        case w:
            element.textContent = "Up";
            break
    }
})