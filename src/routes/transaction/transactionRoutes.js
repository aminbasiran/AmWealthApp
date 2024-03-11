const express = require("express")
const {allTransactions,allTransactionsByInstrument,oneTransaction,newTransaction,updateTransaction,deleteTransaction} = require("../../controllers/transaction/transactionControllers")

const transactionRouter = express.Router()

/**
 * @openapi
 * /transaction:
 *   get:
 *     tags:
 *       - transactions
 *     summary: Get all transactions by the user
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
 * /transaction/{instrument}:
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
 *     summary: Get all transaction by fund of a user
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
 * /transaction/{instrument}/{portfolioID}:
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
 *     summary: Get specific transaction
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
 * /transaction/{instrument}/create:
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
 *     summary: Create a new transaction of a fund
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
 *                   example: "Transaction completed"
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
 * /transaction/{instrument}/{portfolioID}/update:
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
 *     summary: Update a specific transaction
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
 * /transaction/{instrument}/{portfolioID}/delete:
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
 *     summary: Delete a specific transaction
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
 *                   example: "transaction has been deleted."
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