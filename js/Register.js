function validateForm(formId) {
    var form = document.getElementById(formId);
    var username = form.querySelector("#username").value;
    var password = form.querySelector("#password").value;

    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return false;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    saveUserData(username, password);
    return true;
}

function validateLoginForm(formId) {
    var form = document.getElementById(formId);
    var loginUsername = form.querySelector("#loginUsername").value;
    var loginPassword = form.querySelector("#loginPassword").value;

    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (loginUsername !== storedUsername || loginPassword !== storedPassword) {
        alert("Invalid username or password. Please try again.");
        return false;
    }


    return true;
}

function saveUserData(username, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}