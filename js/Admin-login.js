function validateAdminLogin() {
    var validAdminId = "01221354D"
    var validAdminPassword = "password123";

    var enteredAdminId = document.getElementById("adminId").value;
    var enteredAdminPassword = document.getElementById("adminPassword").value;

    if (enteredAdminId === validAdminId && enteredAdminPassword === validAdminPassword) {
        alert("Admin login successful!");
        redirectToNewPage();
    } else {
        alert("Invalid ID or password. Please try again.");
    }

    return false;
}

function redirectToNewPage() {
    var newPageUrl = "Admin-dashboard.html";

    window.location.href = newPageUrl;
}
