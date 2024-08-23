import TextField from "@mui/material/TextField";
import { useState } from "react";
import MobileNumberConfirmationDialog from "./mobileNumberConfirmation";

function MobileNumber({ setScreen }) {
  const [phoneNum, setPhoneNum] = useState(null);
  const [validation, checkValidation] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goBack = () => {
    setScreen("login");
  };

  const storeMobileNumber = (evt) => {
    setPhoneNum({ ...phoneNum, [evt.target.name]: evt.target.value });
    checkValidation(evt.target.value);
  };

  return (
    <div className="max-w-[360px] relative h-[810px] mt-10  w-full mx-auto bg-[#4F285E] rounded-[32px]">
      <img
        src="/onBoardingScreen/png/back.png"
        alt="back"
        className="bg-white px-4 py-2 absolute top-[32px] left-[32px] rounded-[32px] cursor-pointer"
        onClick={goBack}
      />
      <h1 className="text-[#FFFFFF] text-[32px]  relative p-[32px] top-[68px]">
        What is your mobile number?
      </h1>
      <div className="w-full bg-[#F3F1EF] rounded-[32px] p-8 mt-[70px] h-[582px]">
        <div className="py-[24px] relative px-[16px] my-[20px] rounded-[24px] bg-[#E5E2DE] ">
          <TextField
            id="standard-multiline-flexible"
            label="Enter mobile number"
            type="number"
            name="mobileNumber"
            className="w-full text-[#50464B] absolute bottom-[8px] text-[16px]"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            onChange={storeMobileNumber}
          />
        </div>
        {validation.length === 10 && (
          <button
            className="w-full text-[#fff] mt-[330px] rounded-[32px] bg-[#4F285E] px-[12px] py-[16px]"
            onClick={handleClickOpen}
          >
            Next
          </button>
        )}
        {validation.length > 10 && (
          <button
            className="w-full text-[#fff] mt-[330px] rounded-[32px] bg-[#4f285e21] px-[12px] py-[16px]"
            disabled
          >
            Next
          </button>
        )}
      </div>
      <MobileNumberConfirmationDialog
        open={open}
        handleClose={handleClose}
        phoneNum={phoneNum}
      />
    </div>
  );
}

export default MobileNumber;
