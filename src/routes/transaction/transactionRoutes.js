const express = require("express")
const {allTransactions,allTransactionsByPortfolio,newTransaction} = require("../../controllers/transaction/transactionControllers")

const transactionRouter = express.Router()

/**
 * @openapi
 * /api/v1/transaction:
 *   get:
 *     tags:
 *       - transactions
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
 *                   example: "All transactions"
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
transactionRouter.get("/",allTransactions) // get all trx

/**
 * @openapi
 * /api/v1/transaction/{portfolioID}:
 *   get:
 *     tags:
 *       - transactions
 *     parameters:
 *       - in: path
 *         name: portfolioID
 *         required: true
 *         schema:
 *           type: number
 *           description: The ID of the portfolio to retrieve transactions for.
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
 *                   example: "All transactions by portfolio"
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
transactionRouter.get("/:portfolioID",allTransactionsByPortfolio) // get specific

/**
 * @openapi
 * /api/v1/transaction/{portfolioID}:
 *   post:
 *     tags:
 *       - transactions
 *     parameters:
 *       - in: path
 *         name: portfolioID
 *         required: true
 *         schema:
 *           type: number
 *           description: The ID of the portfolio to retrieve transactions for.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newUsername:
 *                 type: string
 *                 example: "syadia"
 *               newEmail:
 *                 type: string
 *                 example: "syadia@swagger.com"
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
 *                   example: "All transactions by portfolio"
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
transactionRouter.post("/:portfolioID/create",newTransaction) // create one trx
transactionRouter.put("/:portfolioID/transaction/:transactionID/update") // put specific
transactionRouter.delete("/:portfolioID/transaction/:transactionID/delete") // delete specific

module.exports = transactionRouter