document.getElementById("reportForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var issueType = document.getElementById("issueType").value;
    var description = document.getElementById("description").value;
    var contact = document.getElementById("contact").value;

    console.log("Issue Type:", issueType);
    console.log("Description:", description);
    console.log("Contact:", contact);

    document.getElementById("issueType").value = "";
    document.getElementById("description").value = "";
    document.getElementById("contact").value = "";

});
