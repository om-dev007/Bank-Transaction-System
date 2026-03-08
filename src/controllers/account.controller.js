import { accountModel } from "../models/accound.model.js";

export const createAccountController = async (req, res) => {
    const user = req.user;

    const account = await accountModel.create({
        user: user._id
    })

    return res.status(201).json({
        account,
        userName: user.name
    })
}