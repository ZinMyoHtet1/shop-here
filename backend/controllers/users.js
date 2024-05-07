import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

const createToken = (email, id) => {
  return jwt.sign({ email, id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export const signin = async (req, res) => {
  const postForm = req.body;
  console.log(postForm);
  try {
    const isExistingUser = await User.findOne({ email: postForm.email });
    if (!isExistingUser)
      return res.status(404).json({ message: "Not found user" });
    const isPasswordCorrect = await bcrypt.compare(
      postForm.password,
      isExistingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(401).json({ message: "Wrong Credentials" });
    const profile = {
      _id: isExistingUser._id,
      name: isExistingUser.name,
      email: isExistingUser.email,
    };

    const accessToken = createToken(postForm.email, isExistingUser._id);
    res.status(200).json({ profile, accessToken });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const signup = async (req, res) => {
  const postForm = req.body;
  try {
    const isExistingUser = await User.findOne({ email: postForm.email });
    if (isExistingUser)
      return res
        .status(400)
        .json({ message: "This email has already sigined" });

    const isStrongPassword = validator.isStrongPassword(postForm.password);

    if (!isStrongPassword)
      return res.status(406).json({ message: "Password is not Strong" });

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(postForm.password, salt);
    const user = await User.create({
      name: `${postForm.fName}${" "}${postForm.lName}`,
      email: postForm.email,
      password: hashedPassword,
    });

    const profile = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };

    const accessToken = createToken(postForm.email, user._id);
    res.status(200).json({ profile, accessToken });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
