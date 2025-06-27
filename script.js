(function() {
  emailjs.init("CnYAHkKyWLkAA6ivh"); // Replace with your EmailJS user ID
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('service_bef0hl3', 'template_2tnsqup', this)
    .then(function() {
      document.getElementById("status-msg").innerText = "Complaint submitted successfully!";
    }, function(error) {
      document.getElementById("status-msg").innerText = "Failed to send complaint. Try again later.";
    });

  this.reset();
});
