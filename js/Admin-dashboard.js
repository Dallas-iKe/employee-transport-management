function addBookingsToLocalStorage(bookingData) {
    var existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    existingBookings.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));
}

function addBookings() {
    var driverName = document.getElementById("driverName").value;
    var vehicleName = document.getElementById("vehicleName").value;
    var timeslot = document.getElementById("timeslot").value;
    var timeShift = document.getElementById("timeShift").value;
    var newBooking = {
        driverName: driverName,
        vehicleName: vehicleName,
        timeslot: timeslot,
        timeShift: timeShift,
    };

    addBookingsToLocalStorage(newBooking);
    displayAllBookings();
    document.getElementById("driverName").value = "";
    document.getElementById("vehicleName").value = "";
    document.getElementById("timeslot").value = "";
    document.getElementById("timeShift").value = "";
    return false;
}

function getAllBookingsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("bookings")) || [];
}

function displayAllBookings() {
    var bookingsContainer = document.getElementById("bookingsContainer");
    var allBookings = getAllBookingsFromLocalStorage();

    bookingsContainer.innerHTML = "";

    allBookings.forEach(function (booking, index) {
        var bookingElement = document.createElement("div");
        bookingElement.innerHTML = `
            <p><strong>Driver Name:</strong> ${booking.driverName}</p>
            <p><strong>Vehicle Number:</strong> ${booking.vehicleName}</p>
            <p><strong>Timeslot:</strong> ${booking.timeslot}</p>
            <p><strong>Time Shift:</strong> ${booking.timeShift}</p>
            <!-- Add other relevant fields as needed -->
            <button onclick="deleteBooking(${index})">Delete Booking</button>
            <hr>
        `;
        bookingsContainer.appendChild(bookingElement);
    });
}

function deleteBooking(index) {
    var allBookings = getAllBookingsFromLocalStorage();
    allBookings.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(allBookings));
    displayAllBookings();
}

function manageBookings() {
    displayAllBookings();
    return false;
}
