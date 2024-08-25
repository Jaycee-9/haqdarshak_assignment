import List from "./List";
import { useState } from "react";
function Welcome() {
  const [screen, setScreen] = useState("welcome");
  const changeScreen = () => {
    setScreen("list");
  };
  return (
    <>
      {screen === "welcome" && (
        <div className="max-w-[360px] relative h-[810px] mt-10  w-full mx-auto bg-[#4F285E] rounded-[32px]">
          <img
            src="/welcome/png/patternTop.png"
            alt="pattern"
            className="absolute top-0"
          />

          <h1 className="text-[#fff] text-[20px] absolute left-[33%] top-[33%] font-medium">
            Welcome to
          </h1>
          <img
            src="/onBoardingScreen/png/haqdarshak_logo.png"
            alt="logo"
            className="w-[184px] mx-auto relative top-[312px]"
          />
          <h1 className="text-[#fff] text-[16px] text-center p-4 absolute  bottom-[35%] font-medium">
            Your profile has been created successfully!
          </h1>

          <img
            src="/welcome/png/patternBottom.png"
            alt="pattern"
            className="absolute bottom-0"
          />
          <button
            className="text-[#fff] text-[16px] text-center p-4 absolute left-[36%] bottom-[28%] font-medium underline"
            onClick={changeScreen}
          >
            Continue
          </button>
        </div>
      )}
      {screen === "list" && <List />}
    </>
  );
}

export default Welcome;
