import { userModel } from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import { sendRegistrationEmail } from "../services/email.service.js";


/**
* - User Register Controller
* - POST /api/auth/register
*/

export const userRegisterController = async (req, res) => {
    const {email, password, name} = req.body

    const isExists = await userModel.findOne({
        email: email
    })

    if(isExists) {
        return res.status(422).json({message: "User already exists with email", status: "failed"})
    }

    const user = await userModel.create({
        email, password, name
    })

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET, {expiresIn: "3d"})

    res.cookie("token", token)

    res.status(201).json({
        message: "User created successfully",
        user: {
            id: user._id,
            email: user.email,
            name: user.name
        }
    })

    await sendRegistrationEmail(user.email, user.name)

}

/**
 * - User Login Controller
 * - POST /api/auth/login 
 */

export const userLoginController = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(401).json({
            message: "Please fill the all details to login your account"
        })
    }

    const user = await userModel.findOne({email}).select("+password")

    if(!user) {
        return res.status(401).json({
            message: "Invalid Email or Password"
        })
    }

    const isValidPassword = await user.comparePassword(password)

    if(!isValidPassword) {
        return res.status(409).json({
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET, {expiresIn: "3d"})

    res.cookie("token", token)

    return res.status(200).json({
        message: "User logged in successfully",
        user: user
    })

}