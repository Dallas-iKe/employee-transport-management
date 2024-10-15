function getAllUserBookingsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("userBookings")) || [];
}

function displayUserBookings() {
    var userBookings = getAllUserBookingsFromLocalStorage();
    var userBookingsContainer = document.getElementById("userBookingsContainer");

    if (userBookings && userBookings.driverName) 
        var driverName = userBookings.driverName;
        console.log(driverName);

    userBookingsContainer.innerHTML = "";

    userBookings.forEach(function (booking, index) {
        var bookingElement = document.createElement("div");
        bookingElement.innerHTML = `
            <p><strong>Driver Name:</strong> ${booking.selectedBooking.driverName}</p>
            <p><strong>Vehicle Name:</strong> ${booking.selectedBooking.vehicleName}</p>
            <p><strong>Timeslot:</strong> ${booking.selectedBooking.timeslot}</p>
            <p><strong>Time Shift:</strong> ${booking.selectedBooking.timeShift}</p>
            <button class="delete-btn" onclick="deleteBooking(${index})">End Trip</button>
            <hr>
        `;
        userBookingsContainer.appendChild(bookingElement);
    });
}

function deleteBooking(index) {
    if (confirm("Are you sure this trip had ended? This booking will be deleted!")) {
        var userBookings = getAllUserBookingsFromLocalStorage();
        userBookings.splice(index, 1);
        localStorage.setItem("userBookings", JSON.stringify(userBookings));
        displayUserBookings();
    }
}

window.onload = function() {
    displayUserBookings();
};
