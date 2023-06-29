const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alexander560111@gmail.com',
        pass: 'q123Q!@#xyz123',
    },
});

// Handle the POST request to send the email
app.post('/send-email', (req, res) => {
    const { name, email, phone, website, services } = req.body;

    // Validate the form data (e.g., check for required fields, email format, etc.)

    // Compose the email message
    const mailOptions = {
        from: 'alexander560111@gmail.com',
        to: 'alexander560111@gmail.com', // Replace with the recipient's email address
        subject: 'New Form Submission',
        text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Website: ${website}
      Services: ${services}
    `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Error sending email' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ success: true, message: 'Email sent successfully' });
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
