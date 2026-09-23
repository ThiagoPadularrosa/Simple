const reviews = document.querySelectorAll(".review");
const nextBtn = document.querySelector(".next-Btn");
const previousBtn = document.querySelector(".previous-Btn");
const randomBtn = document.querySelector(".random-Btn");

let currentIndex = 0;

function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.remove("active");
        if (i === index) {
            review.classList.add("active");
        }
    });
}


nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
});

previousBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
});

randomBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    currentIndex = randomIndex;
    showReview(currentIndex);
});

showReview(currentIndex);   