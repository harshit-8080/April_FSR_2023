const twilio = require("twilio");

const generateOTP = () => {
  const otp = Math.floor(Math.random() * 1000000);
  return otp;
};

const expiry_time = () => {
  const time = new Date();
  time.setTime(new Date().getTime() + 5 * 60 * 1000);

  return time; // otp expiry time 10 minutes.
};

const sendOTP = async (otp, contactNumber) => {
  try {
    const client = twilio(process.env.ACC_SID, process.env.AUTH_TOKEN);

    await client.messages.create({
      body: `Your Verification Code: ${otp}`,
      from: "+12513877817",
      to: `+91${contactNumber}`,
    });

    console.log("SMS sent Successfully");
  } catch (error) {
    console.log(error);
  }
};

// const sendMailToRestaurant = async (
//   restaurantNumber,
//   userName,
//   userAddress
// ) => {
//   try {
//     const client = twilio(process.env.ACC_SID, process.env.AUTH_TOKEN);

//     await client.messages.create({
//       body: `${userName} has ordered at ${userAddress}`,
//       from: "+12513877817",
//       to: `+91${restaurantNumber}`,
//     });

//     console.log("SMS sent Successfully");
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  generateOTP,
  expiry_time,
  sendOTP,
  // sendMailToRestaurant,
};
