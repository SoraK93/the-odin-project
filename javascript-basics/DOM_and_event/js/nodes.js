const h1 = document.getElementsByTagName('h1')[0];
const p = document.getElementsByTagName('p')[0];
const ul = document.getElementsByTagName('ul')[0];

console.log(p.parentNode);
console.log(p.parentElement);
console.log(p.parentNode.parentNode);

console.log(ul.childNodes);

// ul.firstChild.style.background = "yellow"; // TypeError
// [...ul.children].forEach(ele => ele.style.background = "yellow");
for (let ele of ul.children) {
    ele.style.background = "yellow";
}

console.log(p.children);

document.body.children[3].lastElementChild.style.background = "fuchsia";

const tiger = ul.children[1];
tiger.previousElementSibling.style.background = "coral";
tiger.nextElementSibling.style.background = "aquamarine";

