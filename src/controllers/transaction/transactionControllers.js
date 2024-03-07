const allTransactions = (req,res) => {

    try {
        res.status(200).send({ status: "OK", data: "All transactions" });
    } 
    
    catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const allTransactionsByPortfolio = (req,res) => {

    try {

        // if(!portfolioID){
        //     return res.status(500).send({status:"Failed",data: "no params"})
        // }

        res.status(200).send({ status: "OK", data: "All transactions by portfolio" });
    } 
    
    catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}


const newTransaction = (req,res) => {

    const {quantity,order_type,price_limit} = req.body
    const {portfolioID} = req.params

    try {

        if(!portfolioID){
            return res.status(500).send({status:"FAILED",data:"transaction incomplete. Specify which item to buy"})

        }

        else if(!quantity || !order_type || !price_limit){
            return res.status(500).send({status:"FAILED",data:"quantity/price limit/order type is not specified"})
        }


        else{
            res.status(200).send({ status: "OK", data: `You ${order_type} ${quantity} quantity of instrument ${portfolioID}. Transaction completed. Please return to dashboard to view your recent transaction.` });

        }
    } 
    
    catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports = {allTransactions,allTransactionsByPortfolio,newTransaction}