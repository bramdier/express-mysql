const { param } = require("../routes/users");
const userModels = require("../models/users");

// CREATE NEW USER
const createNewUser = async (req, res) => {
    const { body } = req;

    if(!body.name || !body.email || !body.address){
        return res.status(400).json({
            message: "Bad Request Error",
            data: null
        })
    }
    try {
        await userModels.createNewUser(body);
        res.status(201).json({
            message: 'Create New User Success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

// GET ALL USER
const getAllUser = async (req, res) => {
    try {
        const [data] = await userModels.getAllUsers();
        res.json({
            message: 'Get All Users Success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }

}

// UPDATE USER
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        await userModels.updateUser(body, id);
        res.json({
            message: 'Update Users Success',
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

//DELETE USER
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await userModels.deleteUser(id);
        res.json({
            message: 'Delete Users Success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser,
}