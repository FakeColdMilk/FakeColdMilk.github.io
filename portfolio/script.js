document.addEventListener("DOMContentLoaded", () => {
    const flipCard = document.querySelector(".flip-card");

    flipCard.addEventListener("click", () => {
        flipCard.classList.toggle("flipped");
    });
});
