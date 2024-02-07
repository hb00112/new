document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var feedback = document.getElementById('feedback').value;
    
    // Format the message for WhatsApp
    var message = "Name: " + name + "%0A";
    message += "Email: " + email + "%0A";
    message += "Feedback: " + feedback;
    
    // Open WhatsApp with the message prepared
    window.open("https://wa.me/9284494154?text=" + encodeURIComponent(message));
});
