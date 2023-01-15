//create a random number

const num1 = Math.ceil(Math.random() * 100);
const num2 = Math.ceil(Math.random() * 5);

const question = document.getElementById("question");
const form = document.getElementById("form");
const inp = document.getElementById("input");
const score = document.getElementById("score");

let sco = +localStorage.getItem("sco");

question.innerText = `What is the product of ${num1} and ${num2}?`;

const correctAns = num1 * num2;

form.addEventListener("submit", () => {
   const result = +inp.value;

   if(result == correctAns){

    sco++;
    localStorage(); 

   }else{
    sco--;
    localStorage(); 
   }

});

function localStorage() {
  localStorage.setItem("score", JSON.stringify(sco));

}