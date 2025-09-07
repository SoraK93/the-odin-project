import "./styles.css";
import { greeting } from "./greeting"
import odinPic from "./jkwFqfX - Imgur.png"

console.log(greeting);

const img = document.createElement("img");
img.src = odinPic;
document.body.appendChild(img);