// Select all dropdown elements and the button
const dropdowns = document.querySelectorAll('.dropdown');
const nameInput = document.getElementById('name-input');
const button = document.getElementById('show-creature');

// Function to check if all dropdowns and name input have a value
function checkInputs() {
    const allDropdownsSelected = Array.from(dropdowns).every(dropdown => dropdown.value !== "");
    const isNameEntered = nameInput.value.trim() !== "";
    button.disabled = !(allDropdownsSelected && isNameEntered);
}

// Function to save data in local storage and navigate
function saveData() {
    const data = {};
    dropdowns.forEach(dropdown => {
        data[dropdown.id] = dropdown.value; // Save dropdown IDs and values
    });
    data.name = nameInput.value.trim(); // Save the name input
    localStorage.setItem('creatureData', JSON.stringify(data));
    window.location.href = "./result.html";
}

// Add event listeners to dropdowns, name input, and button
dropdowns.forEach(dropdown => dropdown.addEventListener('change', checkInputs));
nameInput.addEventListener('input', checkInputs);
button.addEventListener('click', saveData);
