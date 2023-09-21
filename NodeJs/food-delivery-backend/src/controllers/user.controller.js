const {
  createUser,
  returnAllUsers,
  checkEmailPassword,
  userByEmail,
  addFoodToMyCart,
  getMyCartInfo,
  clearCart,
} = require("../services/user.service");

const signupUser = async (req, res) => {
  try {
    const response = await createUser(req.body);

    return res.json({ message: response });
  } catch (error) {
    return res.json({ Error: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const response = await returnAllUsers();

    return res.json({ message: response });
  } catch (error) {
    return res.json({ Error: error });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    const response = await checkEmailPassword(user);

    return res.json({ message: response });
  } catch (error) {
    return res.json({ Error: error });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const email = req.email;
    const response = await userByEmail(email);

    return res.json({ message: response });
  } catch (error) {
    return res.json({ Error: error });
  }
};

const addToCart = async (req, res) => {
  try {
    const email = req.email;
    const foodId = req.body.foodId;
    const unit = req.body.unit;

    const response = await addFoodToMyCart(email, foodId, unit);
    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

const getCart = async (req, res) => {
  try {
    const email = req.email;

    const response = await getMyCartInfo(email);
    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

const deleteCart = async (req, res) => {
  try {
    const email = req.email;

    const response = await clearCart(email);
    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

module.exports = {
  signupUser,
  getAllUsers,
  loginUser,
  getUserByEmail,
  addToCart,
  getCart,
  deleteCart,
};
