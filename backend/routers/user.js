import express from "express";
const router = express.Router();

import { googleSignin, signin, signup } from "../controllers/users.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/googleSignin", googleSignin);
export default router;
