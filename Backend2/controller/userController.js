const { userCreate } = require('../services/userServices');

const userController = async (req, res) => {
    try {
        const { name, mobileNum, emailId } = req.body;

        if (!name || !mobileNum || !emailId) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const userData = await userCreate(name, mobileNum, emailId);

        res.status(201).json({
            message: "User created successfully",
            data: userData
        });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

module.exports = { userController };   // ⚠ VERY IMPORTANT
