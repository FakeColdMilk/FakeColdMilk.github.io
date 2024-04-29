document.addEventListener("DOMContentLoaded", () => {
    const flipCard = document.querySelector(".flip-card");

    flipCard.addEventListener("click", () => {
        flipCard.classList.toggle("flipped");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const flipCard2 = document.querySelector(".flip-card-2");

    flipCard2.addEventListener("click", () => {
        flipCard2.classList.toggle("flipped-2");
    });
});