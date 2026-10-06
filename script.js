const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    // Open first FAQ when page loads
    if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
    }

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        // Close every FAQ
        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

            const otherAnswer =
                otherItem.querySelector(".faq-answer");

            const otherIcon =
                otherItem.querySelector(".faq-icon");

            otherAnswer.style.maxHeight = null;

            otherIcon.textContent = "+";

        });

        // Open clicked FAQ
        if (!isActive) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

            icon.textContent = "−";

        }

    });

});


// Keep open FAQ height correct when browser resizes

window.addEventListener("resize", () => {

    const activeItem =
        document.querySelector(".faq-item.active");

    if (activeItem) {

        const answer =
            activeItem.querySelector(".faq-answer");

        answer.style.maxHeight =
            answer.scrollHeight + "px";
    }

});