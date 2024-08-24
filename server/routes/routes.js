import { Router } from "express";
import { userLogin, generateOtp } from "../controller/user.js";
const router = Router();

router.post("/login", userLogin);
router.post("/sendOtp", generateOtp);
export default router;
