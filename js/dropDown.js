/**
 * Initializes the dropdowns on the history page with vanilla js.
 */
function initializeDropdowns() {
    const settingsButtons = document.querySelectorAll(".setting_button");

    settingsButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const dropdownOptions = button.nextElementSibling;

            // Toggle the display of dropdown options.
            dropdownOptions.classList.toggle("hidden");
        });
    });
}

document.addEventListener("DOMContentLoaded", initializeDropdowns);