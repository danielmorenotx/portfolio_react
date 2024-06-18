// ===== STORE CREDENTIALS =====
const userLoginEl = document.getElementById("user-credentials"); //setting login container to variable
const loginBtnEl = document.getElementById("login-button"); //setting login button to variable

loginBtnEl.addEventListener("click",loginToWebsite); // adding listener to login button

function loginToWebsite() { // function for login button
    const username = document.getElementById("username").value // set username input to variable
    const password = document.getElementById("password").value // set password input to variable
    console.log("the current username value is", username);
    console.log("the current password value is", password);

    if (username.trim() === "" || password.trim() === "") {
        const warningMessage = document.createElement("p"); //create element for warning
        warningMessage.textContent = "**Must provide username and login**"; // setting warning message
        warningMessage.setAttribute("id","login-warning");
        userLoginEl.appendChild(warningMessage); // appending underneath the login credentials
        setTimeout(function() { //removes warning message after 5 seconds
            userLoginEl.removeChild(warningMessage)
        }, 5000);
    } else {
        localStorage.setItem("username", username); // sets local storage for username
        localStorage.setItem("password", password); // sets local storage for password
        window.location.href = "../food_blog/home/index.html"; // redirects to home page
    }
}

// ===== DARK MODE ======
const lightSwitch = document.getElementById("light-switch"); // set light switch to element

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