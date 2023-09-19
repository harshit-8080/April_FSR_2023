const { decodeToken } = require("../utils/tokenHelper");

const authToken = async (req, res, next) => {
  try {
    const token = req.get("Authorization");

    if (token) {
      const decodeDetails = decodeToken(token);
      req.email = decodeDetails.email;
      next();
    } else {
      return res.json({ message: "Token Not Found" });
    }
  } catch (error) {
    return res.json({ message: "Invalid Token" });
  }
};

module.exports = authToken;
