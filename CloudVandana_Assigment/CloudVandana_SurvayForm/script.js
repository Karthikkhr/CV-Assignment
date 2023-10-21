document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("survey-form");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");

    const submitButton = document.getElementById("submit");
    const resetButton = document.getElementById("reset");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;

        const genderElements = document.querySelectorAll('input[type="checkbox"]:checked');
        let gender = '';
        genderElements.forEach(function (element) {
            gender += element.nextSibling.textContent + ' ';
        });

        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        if (firstName && lastName && dob && country && gender && profession && email && mobile) {
            document.getElementById("popup-first-name").textContent = firstName;
            document.getElementById("popup-last-name").textContent = lastName;
            document.getElementById("popup-dob").textContent = dob;
            document.getElementById("popup-country").textContent = country;
            document.getElementById("popup-gender").textContent = gender;
            document.getElementById("popup-profession").textContent = profession;
            document.getElementById("popup-email").textContent = email;
            document.getElementById("popup-mobile").textContent = mobile;

            popup.style.display = "block";
        }
    });

    resetButton.addEventListener("click", function () {
        surveyForm.reset();
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        surveyForm.reset();
    });
});
