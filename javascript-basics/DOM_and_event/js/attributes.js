const img = document.querySelector("img");

console.log(img.hasAttribute("src"));
console.log(img.getAttribute("src"));
console.log(img.removeAttribute("src"));

img.setAttribute(
  "src",
  "https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/1626540043972-24ITZFD4GJ69DY1K7KDE/surfing-js.png?format=1500w"
);

img.src = "https://www.pacegallery.com/media/images/16_9-2.width-2000.png";
