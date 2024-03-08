const express = require("express")

const dashboardRouter = express.Router()

dashboardRouter.get("/portfolio") // get all
dashboardRouter.get("/portfolio/:portfolioID") // get specific
dashboardRouter.post("/portfolio/create") // create one
dashboardRouter.put("/portfolio/:portfolioID/update") // put specific
dashboardRouter.delete("/portfolio/:portfolioID/delete") // delete specific

module.exports = dashboardRouter