// ¡Buena suerte!
const adviceId = document.getElementById("advice-id");
const cardQuote = document.querySelector(".card__quote");
const dice = document.querySelector(".card__dice");

dice.addEventListener("click", async ()=> {
    const response = await fetch("https://api.adviceslip.com/advice");

    const data = await response.json();
    console.log(data);

    adviceId.innerHTML = data.slip.id;
    cardQuote.innerHTML = data.slip.advice;
})