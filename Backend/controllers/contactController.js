// const Contact = require('../models/Contact');

// exports.createContact = async (req, res) => {
//     try {
//         const { name, email, number, message } = req.body;
//         const newContact = new Contact({ name, email, number, message });
//         await newContact.save();
//         res.status(201).json({ message: 'Contact saved successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Server Error' });
//     }
// };
