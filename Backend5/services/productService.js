const User = require('../models/product');

const userCreate = async (name, mobileNum, emailId) => {
    const data = await User.create({ name, mobileNum, emailId });
    return data;
};

const getAllUser = async () => {
    const data = await User.find();
    return data;
};

const getByIdUser = async (id) => {
    const data = await User.findById(id);
    return data;
};

const userByIdUpdate = async (id, updateData) => {
    const data = await User.findByIdAndUpdate(id, updateData, { new: true });
    return data;
};

module.exports = { userCreate, getAllUser, getByIdUser, userByIdUpdate };