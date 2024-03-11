const axios = require("axios")

const marketData = async (req,res)=>{

    const {instrument, limit} = req.query
    try {

        if(instrument === undefined){
            const response = await axios.get("http://localhost:3000/market.json")
            return res.json(response.data.instruments)
        }

        else{
            const response = await axios.get(`http://localhost:3000/${instrument}.json`)
            res.json(response.data)
        }

    } catch (error) {
        res.status(500).send("internal server error")
    }
}

module.exports = {marketData}