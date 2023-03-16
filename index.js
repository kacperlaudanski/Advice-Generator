const generateAdviceButton = document.getElementById('button') 
const adviceContainer = document.querySelector('.advice')
const adviceNumber = document.getElementById('random-number')
const header = document.querySelector('.advice-number')

async function getAdvice(){
   const res = await fetch(`https://api.adviceslip.com/advice`)
   try {
    const advice = await res.json()
    adviceNumber.textContent = advice.slip.id
    adviceContainer.textContent = advice.slip.advice
   }
   catch(error){
     header.textContent = "ERROR"; 
     adviceContainer.textContent = "Something went wrong :( Please, try again later."
   }
}
getAdvice(); 
generateAdviceButton.addEventListener('click', getAdvice); 
