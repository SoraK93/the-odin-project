const paragraph = document.createElement("p");
paragraph.textContent = "I'm a brand new paragraph";
document.body.insertBefore(paragraph, document.querySelector("ul"));
console.log(paragraph);

const paragraph1 = document.createElement("p");
paragraph1.innerHTML = "I'm a paragraph with <strong>bold</strong> text.";
document.body.insertBefore(paragraph1, paragraph);
console.log(paragraph1);

const text = document.createTextNode("I'm a new text node.");
console.log(text);

const todoList = document.querySelector("ul");
const newTodo = document.createElement("li");
newTodo.textContent = "Do homework";
todoList.appendChild(newTodo);

const anotherTodo = document.createElement("li");
anotherTodo.textContent = "Pay bills";
todoList.insertBefore(anotherTodo, todoList.firstElementChild);

const modifiedTodo = document.createElement("li");
modifiedTodo.textContent = "Feed the dog";
todoList.replaceChild(modifiedTodo, todoList.children[2]);

todoList.removeChild(todoList.lastElementChild);
todoList.children[1].remove();

