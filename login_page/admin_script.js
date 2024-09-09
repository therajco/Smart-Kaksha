document.getElementById("adminloginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Simulate a login validation (you can replace this with actual validation logic)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Assuming simple check for demo purposes
    if (username === "useradmin" && password === "adminpass123") {
        // Redirect to homepage if login is successful
        window.location.href = "http://127.0.0.1:5500/admin_dash/admin_dash.html";  // Change this to the actual homepage URL
    } else {
        alert("Invalid username or password");
    }
});
