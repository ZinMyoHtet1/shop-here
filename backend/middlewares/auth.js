import jwt from "jsonwebtoken";
import axios from "axios";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET,
      function (err, decoded) {
        if (err) return null;
        return decoded;
      }
    );
    if (decodedToken) {
      req.userId = decodedToken?.id;
    } else {
      const { data } = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`
      );
      req.userId = data?.id;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default auth;
