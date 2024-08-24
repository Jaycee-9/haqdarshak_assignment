import { useState, useRef } from "react";
import { loginUser } from "../../service/api";

function OTP({ setView, newOTP, phoneNum }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const goBack = () => {
    setView("MobileNumber");
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value.length === 1 && /^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 3) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async () => {
    const fullOtp = otp.join("");
    const numberFullOtp = parseInt(fullOtp);

    if (newOTP === numberFullOtp) {
      const res = await loginUser(phoneNum.mobile_number);
      console.log(res.data);
    } else {
      alert("OTP is incorrect");
    }
  };

  return (
    <div className="max-w-[360px] relative h-[810px] mt-10 w-full mx-auto bg-[#4F285E] rounded-[32px]">
      <img
        src="/onBoardingScreen/png/back.png"
        alt="back"
        className="bg-white px-4 py-2 absolute top-[32px] left-[32px] rounded-[32px] cursor-pointer"
        onClick={goBack}
      />
      <h1 className="text-[#FFFFFF] text-[32px] relative p-[32px] top-[68px]">
        What is the OTP?
      </h1>
      <div className="w-full bg-[#F3F1EF] rounded-[32px] p-8 mt-[70px] h-[632px]">
        <div className="flex justify-center space-x-4 my-[20px]">
          {Array(4)
            .fill("")
            .map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-[60px] h-[60px] text-center text-[24px] rounded-[24px] bg-[#E5E2DE] border-[1px]  border-[#E5E2DE] focus:outline-none "
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                pattern="[0-9]*"
              />
            ))}
        </div>
        <h1 className="text-[14px] text-[#746E6A] mt-[25px]">
          We have sent an OTP to your mobile number.
        </h1>

        {otp.every((digit) => digit !== "") ? (
          <button
            className="w-full text-[#fff] mt-[330px] rounded-[32px] bg-[#4F285E] px-[12px] py-[16px]"
            onClick={handleSubmit}
          >
            Next
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default OTP;
