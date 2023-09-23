const {
  createUser,
  returnAllUsers,
  checkEmailPassword,
  userByEmail,
  addFoodToMyCart,
  getMyCartInfo,
  clearCart,
  createPaymentService,
  getAPaymentService,
  getAllMyPayments,
  createOrderService,
  getAllMyOrders,
  verifyMyAccount,
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

const createPayment = async (req, res) => {
  try {
    const email = req.email;
    const body = req.body;

    const response = await createPaymentService(email, body);
    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

const getAPayment = async (req, res) => {
  try {
    const paymentId = req.params.paymentId;

    const response = await getAPaymentService(paymentId);
    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

const getAllPayment = async (req, res) => {
  try {
    const email = req.email;

    const response = await getAllMyPayments(email);
    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

const createOrder = async (req, res) => {
  try {
    const email = req.email;

    const response = await createOrderService(email, req.body);
    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

const getOrders = async (req, res) => {
  try {
    const email = req.email;

    const response = await getAllMyOrders(email);
    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

const verifyUser = async (req, res) => {
  try {
    const email = req.email;
    const otp = req.body.otp;

    const response = await verifyMyAccount(email, otp);
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
  createPayment,
  getAPayment,
  getAllPayment,
  createOrder,
  getOrders,
  verifyUser,
};
