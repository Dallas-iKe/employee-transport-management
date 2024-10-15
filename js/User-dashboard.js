function displayWelcomeMessage() {
    var userFirstName = localStorage.getItem("firstName");
    document.getElementById("welcomeMessage").innerText = "Welcome, " + userFirstName;
}

function getAllBookingsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("bookings")) || [];
}

function populateBookingOptions() {
    var bookings = getAllBookingsFromLocalStorage();
    var selectElement = document.getElementById("selectedBooking");

    selectElement.innerHTML = "";

    var defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Select a Booking";
    selectElement.appendChild(defaultOption);

    bookings.forEach(function (booking) {
        var option = document.createElement("option");
        option.value = booking.id;
        option.text = booking.timeslot;
        selectElement.appendChild(option);
    });
}

function displayBookingDetails() {
    var selectedBookingId = document.getElementById("selectedBooking").value;

    var allBookings = getAllBookingsFromLocalStorage();
    var selectedBooking = allBookings.find(function (booking) {
        return booking.id == selectedBookingId;
    });

    if (selectedBooking) {
        var bookingDetails = `
            <p><strong>Driver Name:</strong> ${selectedBooking.driverName || 'N/A'}</p>
            <p><strong>Vehicle Name:</strong> ${selectedBooking.vehicleName || 'N/A'}</p>
            <p><strong>Timeslot:</strong> ${selectedBooking.timeslot || 'N/A'}</p>
            <p><strong>Time Shift:</strong> ${selectedBooking.timeShift || 'N/A'}</p>
            <!-- Add other relevant fields as needed -->
        `;
        document.getElementById("bookingDetails").innerHTML = bookingDetails;
    } else {
        document.getElementById("bookingDetails").innerHTML = '<p>No booking selected</p>';
    }
}

function saveBooking() {
    var selectedBookingId = document.getElementById("selectedBooking").value;
    var selectedBooking = getAllBookingsFromLocalStorage().find(function (booking) {
        return booking.id == selectedBookingId;
    });

    var userID = localStorage.getItem("username");
    var userBookingData = {
        userID,
        selectedBooking

    };
    addUserBookingToLocalStorage(userBookingData);
    displaySuccessMessage();
    document.getElementById("selectedBooking").value = "";
}

function displaySuccessMessage() {
    var successMessageContainer = document.getElementById("successMessage");
    successMessageContainer.innerHTML = '<p>Booking saved successfully!</p>';
}

function addUserBookingToLocalStorage(userBookingData) {
    var existingUserBookings = JSON.parse(localStorage.getItem("userBookings")) || [];
    existingUserBookings.push(userBookingData);
    localStorage.setItem("userBookings", JSON.stringify(existingUserBookings));
}

populateBookingOptions();

displayWelcomeMessage();
