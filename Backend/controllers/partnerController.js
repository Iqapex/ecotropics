const Partner = require("../Models/Partner");
const partnerForm = async (req, res) => {
       try {
           const { name, phone, email, companyName, address, partnershipType, message } = req.body;

           if (!name || !phone || !email || !companyName || !address || !partnershipType || !message) {
               return res.status(400).json({ error: "All fields are required" });
           }

           await Partner.create({ name, phone, email, companyName, address, partnershipType, message });
            res.status(201).json({ message: "Partner form submitted successfully" });
        } catch (error) {
            console.error("Error submitting partner form:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    const getAllPartner = async (req, res) => { 
        try { 
            const partner = await Partner.find({}); 
            res.status(200).json(partner); 
        } catch (error) { 
            console.error("Error retrieving partner data:", error); 
            res.status(500).json({ error: "Internal Server Error" }); 
        } 
    };

    const deletePartnerForm = async (req, res) => {
        try {
            const { id } = req.params;
    
            const deletePartner = await Partner.findByIdAndDelete(id);
            if (!deletePartner) {
                return res.status(404).json({ error: "Partner not found" });
            }
    
            res.status(200).json({ message: "Partner deleted" });
        } catch (error) {
            console.error("Error deleting Partner:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };
    
module.exports = {partnerForm, getAllPartner, deletePartnerForm};


