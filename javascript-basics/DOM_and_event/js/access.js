const demoId = document.getElementById("demo");
console.log(demoId);
demoId.style.border = "1px solid purple";

let demoClass = [...document.getElementsByClassName("demo")];
console.log(demoClass);
demoClass.forEach(element => element.style.border = "1px solid orange");

let demoTag = [...document.getElementsByTagName("article")];
console.log(demoTag);
demoTag.forEach(ele => ele.style.border = "1px solid blue");

const demoQuery = document.querySelector('#demo-query');
demoQuery.style.border = '1px solid red';

const demoQueryAll = document.querySelectorAll('.demo-query-all');
demoQueryAll.forEach(query => {
  query.style.border = '1px solid green';
});
