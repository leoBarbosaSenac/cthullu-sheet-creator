const steps = document.querySelectorAll(".step");

let currentStep = 0;

function showStep(step) {
    steps.forEach((element, index) => {
        element.classList.toggle("active", index === step);
    });
}

const nextButtons = document.querySelectorAll(".next-btn");
const backButtons = document.querySelectorAll(".back-btn");

nextButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });
});

backButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });
});

showStep(currentStep);