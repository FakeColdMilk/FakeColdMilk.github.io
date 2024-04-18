document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const menuItems = document.querySelectorAll("nav ul li");
    const projectCards = document.querySelectorAll(".project-card");

    header.addEventListener("mouseenter", () => header.style.backgroundColor = "#555");
    header.addEventListener("mouseleave", () => header.style.backgroundColor = "#333");

    menuItems.forEach(item => {
        item.addEventListener("mouseenter", () => item.style.transform = "translateY(-3px)");
        item.addEventListener("mouseleave", () => item.style.transform = "translateY(0)");
    });

    projectCards.forEach(card => {
        card.addEventListener("mouseenter", () => card.style.transform = "translateY(-5px)");
        card.addEventListener("mouseleave", () => card.style.transform = "translateY(0)");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const flipCard = document.querySelector(".flip-card");

    flipCard.addEventListener("click", () => {
        flipCard.classList.toggle("flipped");
    });
});
