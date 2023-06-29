const express = require('express');
const nodemailer = require('nodemailer');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000; // Replace with the desired port number

app.use(express.json());

// Create a Nodemailer transporter using your Gmail account credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alexander560111@gmail.com',
        pass: 'q123Q!@#xyz123',
    },
});

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'rebelDatabase';

// Endpoint to handle form submission
app.post('/api/submitForm', async (req, res) => {
    const { name, email, phone, website, services } = req.body;

    // Define the email content
    const mailOptions = {
        from: 'alexander560111@gmail.com',
        to: 'recipient-email@gmail.com',
        subject: 'New Form Submission',
        html: `
      <h3>New Form Submission</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Website: ${website}</p>
      <p>Services: ${services}</p>
    `,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);

        // Connect to the MongoDB server
        const client = new MongoClient(url);
        await client.connect();

        // Access the specified database
        const db = client.db(dbName);

        // Access the collection and insert the form data
        const collection = db.collection('formSubmissions');
        await collection.insertOne(req.body);

        // Close the connection
        await client.close();

        // Send a response to the frontend
        res.sendStatus(200);
    } catch (error) {
        // Handle any error that occurs during email sending or MongoDB operations
        console.log(error);
        res.sendStatus(500);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
