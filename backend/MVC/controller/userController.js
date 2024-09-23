import { userModel } from "../model/userModel.js";
import dotenv from "dotenv";
dotenv.config();

// login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exists
    const user = await userModel.findOne({ email,password });
    if (!user) {
      return res.status(404).send("user not found");
    }
  
    res.status(200).send({
      status: "succes",
      message: "user loged in successfully",
      user:{...user,password:" "},
    });
  } catch (error) {
    res.status(500).send("Internal server error");
    console.log(error)
  }
};
export const registerController = async (req, res) => {
  try {
    const { name, email, password, location } = req.body;
    const exists = await userModel.findOne({ name });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "name already exists",
      });
    }
    const existsEmail = await userModel.findOne({ email });
    if (existsEmail) {
      return res.status(400).json({
        success: false,
        message: "email already exists",
      });
    }
    const newUser = new userModel({
      name,
      email,
      location,
      password,
    });

    await newUser.save();
    return res.status(200).json({
      success: true,
      message: "user registered successfully",
      newUser,
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      error,
    });
  }
};

