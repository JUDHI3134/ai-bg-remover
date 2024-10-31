import express from "express"

import { clerkwebhooks, paymentRazorpay, userCredits, verifyRazorpay } from "../controllers/userController.js"
import authUser from "../middlewares/auth.js"

const userRouter = express.Router()

userRouter.post("/webhooks",clerkwebhooks)
userRouter.get("/credits",authUser,userCredits)
userRouter.post("/pay-razor",authUser,paymentRazorpay)
userRouter.post("/verify-razor",verifyRazorpay)


export default userRouter