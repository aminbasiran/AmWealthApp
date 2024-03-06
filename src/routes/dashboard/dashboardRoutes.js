const express = require("express")

const dashboardRouter = express.Router()

/**
 * @openapi
 * /dashboard/portfolio:
 *   get:
 *     tags:
 *       - dashboard
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
dashboardRouter.get("/portfolio") // get all
dashboardRouter.get("/portfolio/:portfolioID") // get specific
dashboardRouter.post("/portfolio/create") // create one
dashboardRouter.put("/portfolio/:portfolioID/update") // put specific
dashboardRouter.delete("/portfolio/:portfolioID/delete") // delete specific

module.exports = dashboardRouter