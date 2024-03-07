const marketData = (req,res) => {

    try {
        res.status(200).send({ status: "OK", data: "All transactions" });
    } 
    
    catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports = {marketData}