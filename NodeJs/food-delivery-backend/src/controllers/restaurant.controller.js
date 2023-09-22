const {
  createRestaurant,
  checkEmailPassword,
  returnAllRestaurants,
  returnARestaurant,
  toggleServices,
  addFoodToRestaurant,
  getTotalAmountService,
  markAsCompleted,
} = require("../services/restaurant.service");

const signupRestaurant = async (req, res) => {
  try {
    const response = await createRestaurant(req.body);

    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

const loginRestaurant = async (req, res) => {
  try {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    const response = await checkEmailPassword(user);

    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const response = await returnAllRestaurants();

    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

const getARestaurants = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await returnARestaurant(id);

    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

const updateServices = async (req, res) => {
  try {
    const email = req.email;
    const response = await toggleServices(email);

    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

const addFood = async (req, res) => {
  try {
    const email = req.email;
    const response = await addFoodToRestaurant(email, req.body);

    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

const getTotalAmounts = async (req, res) => {
  try {
    const email = req.email;
    const response = await getTotalAmountService(email);

    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

const markPaymentComplete = async (req, res) => {
  try {
    const paymentId = req.params.paymentId;

    const response = await markAsCompleted(paymentId);
    return res.json({ message: response });
  } catch (error) {
    console.log(error);
    return res.json({ Error: error });
  }
};

module.exports = {
  signupRestaurant,
  loginRestaurant,
  getAllRestaurants,
  getARestaurants,
  updateServices,
  addFood,
  getTotalAmounts,
  markPaymentComplete,
};
