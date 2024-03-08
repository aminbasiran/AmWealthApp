const axios = require("axios")

const marketData = async (req,res)=>{

    const {instrument} = req.query
    try {
        const response = await axios.get("http://localhost:3000/market.json")
        res.json(response.data.instruments[instrument])
    } catch (error) {
        res.status(500).send("internal server error")
    }
}

module.exports = {marketData}