// ===== DARK MODE ====
const lightSwitch = document.getElementById("light-switch")

lightSwitch.addEventListener("change",changeLight);


// changes the theme to dark mode and stores info locally
function changeLight() { // change local storage to enabled or disabled for dark mode
    const currentLightMode = document.body.classList.contains("dark-mode"); // true if the body element has the "dark-mode" class as an attribute

    if (currentLightMode === true) {
        localStorage.setItem("dark mode","disabled");
    } else {
        localStorage.setItem("dark mode","enabled")
    }

    document.body.classList.toggle("dark-mode")
    console.log("Dark mode is", localStorage.getItem("dark mode"))
}

// -- check if it is enabled on load so that the switch is flipped already --
document.addEventListener("DOMContentLoaded",isDarkOrNot);

function isDarkOrNot() {
    // check if dark mode is enabled or disabled in local storage
    const darkMode = localStorage.getItem("dark mode");

    if (darkMode === "enabled") {
        lightSwitch.checked = true; // sets the switch to "on" if local store is enabled
        document.body.classList.add("dark-mode");
    } else {
        lightSwitch.check = false; // turns it off if not
    }
}

// ===== LOCAL STORAGE USERNAME =====
const username = localStorage.getItem("username") // setting local storage username to variable

document.getElementById("account-username").textContent = username // setting the username in the header
