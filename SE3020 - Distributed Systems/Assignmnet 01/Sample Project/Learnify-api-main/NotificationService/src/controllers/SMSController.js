// Manages sms handling features
const axios = require("axios");

const SMSController = async (req, res) => {
  try {
    const user_id = "27156";
    const api_key = "2wswJTwUKGNu1Rwbd6N9";

    let receiver = req.body.receiver;
    const msg = req.body.message;

    // Validate format of the receiver phone number
    if (!receiver.startsWith("+")) {
      if (receiver.length === 10 && receiver.startsWith("0")) {
        // Remove the leading '0' and add '+94' instead
        receiver = "+94" + receiver.substring(1);
      } else {
        throw new Error('Receiver phone number should start with "+".');
      }
    } else if (!receiver.match(/^\+94\d{9}$/)) {
      throw new Error("Invalid receiver phone number format.");
    }

    const url = `https://app.notify.lk/api/v1/send?user_id=${user_id}&api_key=${api_key}&sender_id=NotifyDEMO&to=${receiver}&message=${msg}`;

    const response = await axios.post(url);

    console.log(response.data);

    res.status(200).send(response.data);
  } catch (error) {
    // handle errors
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = SMSController;
