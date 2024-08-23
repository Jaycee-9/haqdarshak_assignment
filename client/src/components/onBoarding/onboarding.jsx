import { useState } from "react";
import Benefits from "./benefits";
import { Oval } from "react-loader-spinner";
function OnBoardingScreen() {
  const [screen, setScreen] = useState("haqdarshak");
  const [loader, setLoader] = useState(true);
  setInterval(() => {
    setScreen("benefits");
  }, 4000);

  setInterval(() => {
    setLoader(false);
  }, 1500);
  return (
    <>
      {screen === "haqdarshak" && (
        <div className="max-w-[360px] relative h-[810px] mt-10  w-full mx-auto bg-[#4F285E] rounded-[32px]">
          <img
            src="/onBoardingScreen/png/haqdarshak_logo.png"
            alt="logo"
            className="w-[184px] mx-auto relative top-[312px]"
          />
          <div className="absolute top-[55%] left-[45%]">
            {loader ? (
              <Oval
                visible={false}
                height="40"
                width="40"
                color="#ffff"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              <Oval
                visible={true}
                height="40"
                width="40"
                color="#ffff"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            )}
          </div>
        </div>
      )}
      {screen === "benefits" && <Benefits />}
    </>
  );
}

export default OnBoardingScreen;
