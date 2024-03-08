const express = require("express")
const authRouter = require("../auth/authRoutes")
const usersRouter = require("../users/usersRoutes")
const dashboardRouter = require("../dashboard/dashboardRoutes")
const transactionRouter = require("../transaction/transactionRoutes")
const marketRouter = require("../market/marketRoutes")
const {mockAuthMiddleware} = require("../../middlewares/authMiddleware")
const router = express.Router()


router.use("/auth", authRouter)
// ADD AUTH MIDDLEWARE HERE  

// 
router.use("/user",mockAuthMiddleware,usersRouter)
router.use("/dashboard",mockAuthMiddleware, dashboardRouter)
router.use("/transaction",mockAuthMiddleware, transactionRouter)
router.use("/market",mockAuthMiddleware, marketRouter)




module.exports = router