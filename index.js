const generateAdviceButton = document.getElementById('button') 
const adviceContainer = document.querySelector('.advice-container__advice')
const adviceNumber = document.getElementById('random-id')

async function getAdvice(){
   const res = await fetch(`https://api.adviceslip.com/advice`)
   try {
    const advice = await res.json()
    adviceNumber.textContent = advice.slip.id
    adviceContainer.textContent = advice.slip.advice
   }
   catch(error){
     adviceNumber.textContent = "ERROR"; 
     adviceContainer.textContent = "Something went wrong :( Please, try again later."
   }
}
window.addEventListener("DOMContentLoaded", getAdvice()); 
generateAdviceButton.addEventListener('click', getAdvice); 
