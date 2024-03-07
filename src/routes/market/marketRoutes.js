const express = require("express")
const {marketData} = require("../../controllers/market/marketControllers")
const { default: axios } = require("axios")

const marketRouter = express.Router()


// testing
marketRouter.get("/temp",async (req,res)=>{
    try {
        const response = await axios.get("http://localhost:3000/market.json")
        res.json(response.data)
    } catch (error) {
        res.status(500).send("internal server error")
        
    }

})

/**
 * @openapi
 * /market/query:
 *   get:
 *     tags:
 *       - market
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
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
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
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
marketRouter.get("/:investment/query",marketData) // get all instruments


module.exports = marketRouter