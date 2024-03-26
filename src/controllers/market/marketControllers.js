const axios = require("axios")

const marketData = async (req,res)=>{

    const {instrument} = req.query
    try {

        if(instrument === undefined){
            return 
        }

        else{
            const response = await axios.get(`https://amwealthapp-mock-api.onrender.com/api/v1/${instrument}.json`)
            res.json(response.data)
        }

    } catch (error) {
        res.status(500).send("internal server error")
    }
}

module.exports = {marketData}