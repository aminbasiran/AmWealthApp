const express = require("express")
const {marketData} = require("../../controllers/market/marketControllers")

const marketRouter = express.Router()

/**
 * @openapi
 * /api/v1/market/query:
 *   get:
 *     tags:
 *       - market
 *     parameters:
 *       - in: query
 *         name: instrument
 *         schema:
 *           type: string
 *           description: Description of the query parameter
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: string
 *                   example: "all mutual funds"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
marketRouter.get("/query",marketData) // get all instruments

// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo
module.exports = marketRouter