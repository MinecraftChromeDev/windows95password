window.onload = function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        var usernameInput = document.getElementById("usernameInput");
        var passwordInput = document.getElementById("passwordInput");
        
        if (usernameInput.value === "") {
            alert("Please enter a valid username.");
            event.preventDefault(); // Prevent form submission
        }
        
        if (passwordInput.value === "") {
            alert("Please enter a valid password.");
            event.preventDefault(); // Prevent form submission
        }
    });
};
