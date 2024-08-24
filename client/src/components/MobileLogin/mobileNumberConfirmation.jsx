import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import { generateOTP } from "../../service/api";

function MobileNumberConfirmationDialog({
  open,
  handleClose,
  phoneNum,
  setView,
}) {
  const getOTP = async () => {
    const res = await generateOTP({ mobile_number: phoneNum?.mobileNumber });
    console.log(res.data.mobileOTP);
  };

  const changeScreen = () => {
    setView("otp");
  };

  return (
    <>
      <Dialog
        className="max-w-[360px] w-full mx-auto"
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <div className=" w-full mx-auto flex flex-col items-center justify-center">
            <p>Please confirm your mobile number.</p>
            <div className="text-[18px] text-center font-semibold mt-[16px]">
              {phoneNum?.mobileNumber}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Edit</Button>
          <Button
            onClick={() => {
              getOTP();
              changeScreen();
            }}
          >
            Send OTP
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default MobileNumberConfirmationDialog;
