const { param } = require("../routes/users")

// CREATE NEW USER
const createNewUser = (req, res) => {
    res.json({
        message: 'Create New User Success',
        data: req.body
    })
}

// GET ALL USER
const getAllUser = (req, res) => {
    const data = {
        id: "1",
        name: "Abraham",
        email: "abrahamsiregar99@gmail.com",
        address: "Jakarta Barat"
    }
    res.json({
        message: 'Get All Users Success',
        data: data
    })
}

// UPDATE USER
const updateUser = (req, res) => {
    const { id } = req.params;
    console.log("id user: ", id);
    res.json({
        message: 'Update Users Success',
        data: req.body
    })
}

//DELETE USER
const deleteUser = (req, res) => {
    const { id } = req.params;
    console.log("id user: ", id);
    res.json({
        message: 'Delete Users Success',
        data: {
            id: id,
            name: "Abraham",
            email: "abrahamsiregar99@gmail.com",
            address: "Jakarta Barat"
        }
    })
}

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser,
}