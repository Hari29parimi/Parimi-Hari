// Dark mode toggle functionality
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    }
    // Form submission handler (simple, no back-end in this case)
    document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Message Sent!¥nName: ${name}¥nEmail: ${email}¥nMessage: ${message}`);
    // Reset the form
    document.getElementById('contactForm').reset();
    });
    //dark mode toggle button