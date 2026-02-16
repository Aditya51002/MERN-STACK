const { userCreate, getAllUser, getByIdUser, userByIdUpdate } = require("../services/productService");

const userController = async (req, res) => {
    try {
        const { name, mobileNum, emailId } = req.body;
        if (!name || !mobileNum || !emailId) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const userData = await userCreate(name, mobileNum, emailId);
        res.status(201).json({ data: userData, msg: "User created" });
    } catch (err) {
        res.status(500).json({ error: err.message || err, msg: 'Internal server error' });
    }
};

const getAllUserInControllers = async (req, res) => {
    try {
        const userData = await getAllUser();
        res.status(200).json({ data: userData, success: true });
    } catch (err) {
        res.status(500).json({ error: err.message || err, msg: "Internal server error" });
    }
};

const getByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ msg: 'id is required' });
        const userData = await getByIdUser(id);
        if (!userData) return res.status(404).json({ msg: 'User not found' });
        res.status(200).json({ data: userData });
    } catch (err) {
        res.status(500).json({ error: err.message || err, msg: 'Internal server error' });
    }
};

const updateUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        if (!id || !updateData || Object.keys(updateData).length === 0) {
            return res.status(400).json({ msg: 'id and update data are required' });
        }
        const userData = await userByIdUpdate(id, updateData);
        if (!userData) return res.status(404).json({ msg: 'User not found' });
        res.status(200).json({ data: userData, msg: 'User updated' });
    } catch (err) {
        res.status(500).json({ error: err.message || err, msg: 'Update failed' });
    }
};
const userDeleteController=async(req,rea)=>{
    try{
        const userData= await userByIdDelete(req.params.id)
        res.status(200).json({data: userData, msg:"user deleted"})
    }catch(err){
        res.status(500).json({error: err, msg:"user not deleted"})
    }
};

module.exports = { userController, getAllUserInControllers, getByIdController, updateUserController };