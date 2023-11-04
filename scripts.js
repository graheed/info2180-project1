document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    const form = document.querySelector(".newsletter form");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const emailInput = document.querySelector("#email");
        const email = emailInput.value.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
        } else {
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    });
});
