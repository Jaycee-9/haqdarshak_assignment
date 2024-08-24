import { useState } from "react";
import MobileNumber from "../MobileLogin/mobileNumber";

function Login({ setPage }) {
  const [loginMethod, setLoginMethod] = useState(null);
  const [validation, checkValidation] = useState(true);
  const [screen, setScreen] = useState("login");

  const goBack = () => {
    setPage("language");
  };

  const handleNextbtn = () => {
    if (loginMethod) {
      setScreen("mobileLogin");
    } else {
      checkValidation(false);
    }
  };

  const storeLoginMethod = (evt) => {
    setLoginMethod({ ...loginMethod, [evt.target.name]: evt.target.value });
    checkValidation(true);
  };

  return (
    <>
      {screen === "login" && (
        <div className="max-w-[360px] relative h-[810px] mt-10  w-full mx-auto bg-[#4F285E] rounded-[32px]">
          <img
            src="/onBoardingScreen/png/back.png"
            alt="back"
            className="bg-white px-4 py-2 absolute top-[32px] left-[32px] rounded-[32px] cursor-pointer"
            onClick={goBack}
          />
          <h1 className="text-[#FFFFFF] text-[32px]  relative p-[32px] top-[68px]">
            How do you want to login?
          </h1>
          <div className="w-full bg-[#F3F1EF] rounded-[32px] p-8 mt-[70px] ">
            <div className="flex items-center py-[24px] px-[16px] rounded-[24px] bg-[#E5E2DE] border-[1px] border-[#D1CFCD]">
              <input
                type="radio"
                name="loginMethod"
                value="new user"
                disabled
                onClick={storeLoginMethod}
              />
              <h1 className="px-[16px] ">Register me as a new user</h1>
            </div>
            <div className="flex items-center py-[24px] px-[16px] my-[20px] rounded-[24px] bg-[#E5E2DE] border-[1px] border-[#D1CFCD]">
              <input
                type="radio"
                name="loginMethod"
                value="phone"
                onClick={storeLoginMethod}
              />
              <h1 className="px-[16px] font-medium ">Use my Phone Number</h1>
            </div>
            <div className="flex items-center py-[24px] px-[16px] rounded-[24px] bg-[#E5E2DE] border-[1px] border-[#D1CFCD]">
              <input
                type="radio"
                name="loginMethod"
                value="Yojana card"
                onClick={storeLoginMethod}
                disabled
              />
              <h1 className="px-[16px] ">Use my Yojana Card</h1>
            </div>
            {!validation && (
              <h1 className="text-red-500 mt-4 absolute bottom-[150px]">
                Please select your login method
              </h1>
            )}

            <button
              className="w-full text-[#fff] mt-[199px] rounded-[32px] bg-[#4F285E] px-[12px] py-[16px]"
              onClick={handleNextbtn}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {screen === "mobileLogin" && (
        <MobileNumber setScreen={setScreen} screen={screen} />
      )}
    </>
  );
}

export default Login;
