document.addEventListener("DOMContentLoaded", () => {
    const fontSizeSelector = document.getElementById("fontSizeSelector");
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Mengubah ukuran font
    fontSizeSelector.addEventListener("change", (event) => {
        document.body.style.fontSize = event.target.value;
    });

    // Mengaktifkan/Mematikan Dark Mode
    darkModeToggle.addEventListener("change", (event) => {
        if (event.target.checked) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    });
});
