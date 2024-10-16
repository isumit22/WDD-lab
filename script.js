document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh on submit

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Email validation (simple regex)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Phone validation (simple US format: 123-456-7890)
    const phonePattern = /^\+91\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number in the format +91XXXXXXXXXX.');
        return;
    }

    // Display response message if everything is valid
    const responseMessage = `
        Thank you for your submission, ${name}!<br>
        We have recorded the following details:<br>
        Email: ${email}<br>
        Phone: ${phone}<br>
        Age: ${age}<br>
        Gender: ${gender}<br>
        Experience Rating: ${rating}/5<br>
        Comments: ${comments}
    `;
    document.getElementById('response').innerHTML = responseMessage;
});
