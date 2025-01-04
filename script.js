document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');
    // Example of client-side authentication logic
    const isAdmin = true; // Assume user is admin after successful sign-in

    if (isAdmin) {
        // Show admin controls
        document.getElementById("admin-controls").style.display = "block";
    }

    // Redirect to another page when clicking on Past Papers button
    document.getElementById("past-papers").addEventListener("click", function() {
        window.location.href = "pastpaper.html";
    });
    document.getElementById("Foodreview").addEventListener("click", function() {
        window.location.href = "Foodreview.html";
    });

    // Redirect to edit resources page or perform admin-specific actions
    document.getElementById("edit-resources").addEventListener("click", function() {
        // Perform admin-specific actions here, such as redirecting to an admin page
        window.location.href = "edit-resources.html";
    });
});
() => {
    document.body.classList.toggle("dark-theme");
  
    if (document.body.classList.contains("dark-theme")) {
      themeToggle.textContent = "Switch to Light Mode";
    } else {
      themeToggle.textContent = "Switch to Dark Mode";
    }
  }