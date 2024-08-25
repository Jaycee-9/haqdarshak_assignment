import { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";

const list = [
  { title: "Find the benefits that are right for you or your business" },
  { title: "Learn everything you need to apply " },
  { title: "Save schemes and track your bookings " },
];

function List() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    alert("Thats all folks!");
  };

  return (
    <div className="max-w-[360px] relative h-[810px] mt-10 w-full mx-auto bg-[#4F285E] rounded-[32px]">
      <img
        src="/welcome/png/patternTop.png"
        alt="pattern"
        className="absolute top-0"
      />

      <img
        src="/onBoardingScreen/png/haqdarshak_logo.png"
        alt="logo"
        className="w-[184px] mx-auto relative top-[78px]"
      />

      {list.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center relative top-[150px]"
        >
          {loading ? (
            <>
              <ColorRing
                visible={true}
                height="32"
                width="32"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
              />
              <p className="text-[16px] max-w-[252px] w-full m-3 text-[#fff]">
                {item.title}
              </p>
            </>
          ) : (
            <>
              <img src="/welcome/png/tick.png" alt="tick" />
              <p className="text-[16px] max-w-[252px] w-full m-3 text-[#fff]">
                {item.title}
              </p>
            </>
          )}
        </div>
      ))}

      <img
        src="/welcome/png/patternBottom.png"
        alt="pattern"
        className="absolute bottom-0"
      />

      {!loading && (
        <div className="w-full mx-auto absolute bottom-14 px-[20px] ">
          <button
            className="w-full text-[#4F285E] cursor-pointer rounded-[32px] bg-[#FFFFFF] px-[12px] py-[16px]"
            onClick={handleStart}
          >
            Get Started!
          </button>
        </div>
      )}
    </div>
  );
}

export default List;
