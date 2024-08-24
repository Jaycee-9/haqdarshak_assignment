import pool from "../database/database.js";

export const userLogin = async (req, res) => {
  try {
    const mobile_number = req.body.mobileNumber;

    // Step 1: Check if the user already exists by querying the database
    const checkUserQuery = `SELECT * FROM users WHERE mobile_number = $1`;
    const checkUserResult = await pool.query(checkUserQuery, [mobile_number]);

    if (checkUserResult.rows.length > 0) {
      // If user already exists, return the existing user info
      return res.status(200).json({
        message: "User already exists",
        user: checkUserResult.rows[0],
      });
    }

    // Step 2: If the user does not exist, proceed to insert the new user
    const insertSTMT = `INSERT INTO users (mobile_number) VALUES ($1) RETURNING *`;
    const result = await pool.query(insertSTMT, [mobile_number]);

    res.status(201).json({
      message: "User registered successfully",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Error during user login:", error);
    res
      .status(500)
      .json({ message: "Error logging in user", error: error.message });
  }
};

export const generateOtp = async (req, res) => {
  if (req.body.mobile_number) {
    const OTP = Math.floor(1000 + Math.random() * 9000);
    return res.status(200).json({ mobileOTP: OTP });
  }

  res.status(500).json({ msg: "something went wrong" });
};
