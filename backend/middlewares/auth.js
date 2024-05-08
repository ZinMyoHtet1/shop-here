import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET,
      function (err, decoded) {
        if (err) return null;
        return decoded;
      }
    );
    if (!decodedToken) res.status(404).json({ message: "Unauthorized" });
    req.userId = decodedToken?.id;
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default auth;
