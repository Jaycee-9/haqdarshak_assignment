import { useState } from "react";
import Login from "./login";

function Language({ setScreen }) {
  const [page, setPage] = useState("language");
  const [userLanguage, setUserLanguage] = useState(null);
  const [validation, checkValidation] = useState(true);

  const goBack = () => {
    setScreen("benefits");
  };

  const handleNextbtn = () => {
    if (userLanguage) {
      setPage("login");
    } else {
      checkValidation(false);
    }
  };

  const storeValue = (evt) => {
    setUserLanguage(evt.target.value);
    checkValidation(true);
  };

  return (
    <>
      {page === "language" && (
        <div className="max-w-[360px] relative h-[810px] mt-10  w-full mx-auto bg-[#4F285E] rounded-[32px]">
          <img
            src="/onBoardingScreen/png/back.png"
            alt="back"
            className="bg-white px-4 py-2 absolute top-[32px] left-[32px] rounded-[32px] cursor-pointer"
            onClick={goBack}
          />
          <h1 className="text-[#FFFFFF] text-[32px]  relative p-[32px] top-[68px]">
            Which language do you prefer?
          </h1>
          <div className="w-full bg-[#F3F1EF] rounded-[32px] p-8 mt-[70px] ">
            <div className="flex items-center py-[24px] px-[16px] rounded-[24px] bg-[#E5E2DE] border-[1px] border-[#D1CFCD]">
              <input
                type="radio"
                name="language"
                value="English"
                onClick={storeValue}
              />
              <h1 className="px-[16px] ">English</h1>
            </div>
            <div className="flex items-center py-[24px] px-[16px] my-[20px] rounded-[24px] bg-[#E5E2DE] border-[1px] border-[#D1CFCD]">
              <input
                type="radio"
                name="language"
                value="hindi"
                disabled
                onClick={storeValue}
              />
              <h1 className="px-[16px] font-medium ">हिंदी</h1>
            </div>
            <div className="flex items-center py-[24px] px-[16px] rounded-[24px] bg-[#E5E2DE] border-[1px] border-[#D1CFCD]">
              <input
                type="radio"
                name="language"
                value="kannada"
                disabled
                onClick={storeValue}
              />
              <h1 className="px-[16px] ">ಕನ್ನಡ </h1>
            </div>
            <h1 className="text-[14px] text-[#746E6A] mt-[25px]">
              This allows you to experience the app in a language of your
              preference.
            </h1>
            {!validation && (
              <h1 className="text-red-500 mt-4 absolute bottom-[150px]">
                Please select your preferred language
              </h1>
            )}
            <button
              className="w-full text-[#fff] mt-[132px] rounded-[32px] bg-[#4F285E] px-[12px] py-[16px]"
              onClick={handleNextbtn}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {page === "login" && <Login setPage={setPage} />}
    </>
  );
}

export default Language;
