const {
  createRestaurant,
  checkEmailPassword,
  returnAllRestaurants,
  returnARestaurant,
  toggleServices,
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

module.exports = {
  signupRestaurant,
  loginRestaurant,
  getAllRestaurants,
  getARestaurants,
  updateServices,
};
