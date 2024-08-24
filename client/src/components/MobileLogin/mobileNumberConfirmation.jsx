import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

function MobileNumberConfirmationDialog({
  open,
  handleClose,
  phoneNum,
  setView,
  getOTP,
}) {
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
              {phoneNum?.mobile_number}
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
