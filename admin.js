const ADMIN_PASSWORD = "admin123"; // change this

// Show admin panel if logged in
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("admin") === "true") {
    const panel = document.getElementById("admin-panel");
    if (panel) panel.style.display = "block";
  }
});

// Admin login button
function adminLogin() {
  const pass = prompt("Enter admin password:");
  if (pass === ADMIN_PASSWORD) {
    localStorage.setItem("admin", "true");
    location.reload();
  }
}

// Logout
function adminLogout() {
  localStorage.removeItem("admin");
  location.reload();
}
