import { useState } from "react";
import Language from "./langauge";
function Benefits() {
  const [screen, setScreen] = useState("benefits");
  const changeScreen = () => {
    setScreen("language");
  };
  return (
    <>
      {screen === "benefits" && (
        <div className="max-w-[360px] relative h-[810px] mt-10  w-full mx-auto bg-[#f5e3fc] rounded-[32px]">
          <h1 className="max-w-[320px] h-[144px] px-[32px] text-[#4F285E] text-[40px] font-medium relative top-[177px]">
            Getting benefits is now easy!
          </h1>
          <img
            src="/onBoardingScreen/png/benefits-ladies.png"
            alt="group-image"
            className="absolute bottom-0 rounded-[32px]"
          />
          <button
            className="absolute top-1/2 left-[38%] underline hover:text-green-500"
            onClick={changeScreen}
          >
            Get Started
          </button>
        </div>
      )}
      {screen === "language" && <Language setScreen={setScreen} />}
    </>
  );
}

export default Benefits;
