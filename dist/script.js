"use strict";
const toggleBtn = document.getElementById("toggle-btn");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}
else {
    console.error("Toggle button not found!");
}
//# sourceMappingURL=script.js.map