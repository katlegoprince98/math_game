//create a random number

const num1 = Math.ceil(Math.random() * 100);
const num2 = Math.ceil(Math.random() * 5);

const question = document.getElementById("question");

question.innerText = `What is the product of ${num1} and ${num2}?`;