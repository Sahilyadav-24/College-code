// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});
// main.js

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting to a server (for demo purposes)
  
    // Show confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';
    // Optionally, reset the form after submission
    document.getElementById('appointmentForm').reset();
  });
// Admin Login form handling
document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Hardcoded admin credentials (for demo purpose)
    const adminUsername = "admin";
    const adminPassword = "admin123";
  
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
  
    // Check if credentials are correct
    if (enteredUsername === adminUsername && enteredPassword === adminPassword) {
      window.location.href = 'admin_dashboard.html';  // Redirect to dashboard
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
  document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const appointment = {
      patientName: document.getElementById('patientName').value,
      phoneNumber: document.getElementById('phoneNumber').value,
      doctor: document.getElementById('doctorSelect').value,
      appointmentTime: document.getElementById('appointmentTime').value,
    };
  
    // Get existing or create new array
    const existing = JSON.parse(localStorage.getItem('appointments')) || [];
    existing.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(existing));
  
    document.getElementById('confirmationMessage').style.display = 'block';
    document.getElementById('appointmentForm').reset();
  });
// Save appointment to localStorage
document.getElementById('appointmentForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const appointment = {
    patientName: document.getElementById('patientName').value,
    phoneNumber: document.getElementById('phoneNumber').value,
    doctor: document.getElementById('doctorSelect').value,
    appointmentTime: document.getElementById('appointmentTime').value,
    bookedAt: new Date().toLocaleString()
  };

  const existing = JSON.parse(localStorage.getItem('appointments')) || [];
  existing.push(appointment);
  localStorage.setItem('appointments', JSON.stringify(existing));

  document.getElementById('confirmationMessage').style.display = 'block';
  document.getElementById('appointmentForm').reset();
});
      