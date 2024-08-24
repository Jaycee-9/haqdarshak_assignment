import axios from "axios";

const URL = "http://localhost:8000";

export const generateOTP = async (phoneNumber) => {
  try {
    const response = await axios.post(`${URL}/sendOtp`, phoneNumber);
    return response;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};
