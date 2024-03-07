const express = require("express")
const {allTransactions,allTransactionsByInstrument,oneTransaction,newTransaction,updateTransaction,deleteTransaction} = require("../../controllers/transaction/transactionControllers")

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
 * /api/v1/transaction/{instrument}:
 *   get:
 *     tags:
 *       - transactions
 *     parameters:
 *       - in: path
 *         name: portfolioID
 *         required: true
 *         schema:
 *           type: number
 *           description: The name of the fund example, mutual fund/stocks/options.
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
 *                   example: "All transactions by instrument"
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
transactionRouter.get("/:instrument",allTransactionsByInstrument) // get all transaction by instrument

/**
 * @openapi
 * /api/v1/transaction/{instrument}/{portfolioID}:
 *   get:
 *     tags:
 *       - transactions
 *     parameters:
 *       - in: path
 *         name: instrument
 *         required: true
 *         schema:
 *           type: string
 *           description: The name of the fund example, mutual fund/stocks/options.
 *       - in: path
 *         name: portfolioID
 *         required: true
 *         schema:
 *           type: number
 *           description: The id of a specific transaction.
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
 *                   example: "one transaction by instrument"
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
transactionRouter.get("/:instrument/:portfolioID",oneTransaction) // get specific trx of instrument 

/**
 * @openapi
 * /api/v1/transaction/{instrument}/create:
 *   post:
 *     tags:
 *       - transactions
 *     parameters:
 *       - in: path
 *         name: instrument
 *         required: true
 *         schema:
 *           type: string
 *           description: The name of the fund example, mutual fund/stocks/options.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 example: 1.345
 *               quantity:
 *                 type: number
 *                 example: 100
 *               order_type:
 *                 type: string
 *                 enum: ["buy", "sell"]
 *                 example: "buy"
 *               price_limit:
 *                 type: number
 *                 example: 150
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
 *                   example: "You buy 10 quantity of mutual fund. Transaction completed. Please return to dashboard to view your recent transaction."
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
transactionRouter.post("/:instrument/create",newTransaction) // create one trx

/**
 * @openapi
 * /api/v1/transaction/{instrument}/{portfolioID}/update:
 *   put:
 *     tags:
 *       - transactions
 *     parameters:
 *       - in: path
 *         name: instrument
 *         required: true
 *         schema:
 *           type: string
 *           description: The name of the fund example, mutual fund/stocks/options.
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
 *               newQuantity:
 *                 type: number
 *                 example: 500
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
 *                   example: "Transaction updated."
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
transactionRouter.put("/:instrument/:portfolioID/update",updateTransaction) // put specific

/**
 * @openapi
 * /api/v1/transaction/{instrument}/{portfolioID}/delete:
 *   delete:
 *     tags:
 *       - transactions
 *     parameters:
 *       - in: path
 *         name: instrument
 *         required: true
 *         schema:
 *           type: string
 *           description: The name of the fund example, mutual fund/stocks/options.
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
 *                   example: "transaction has been revoked."
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
transactionRouter.delete("/:instrument/:portfolioID/delete",deleteTransaction) // delete specific

module.exports = transactionRouter