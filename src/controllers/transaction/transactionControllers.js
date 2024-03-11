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



const allTransactionsByInstrument = (req,res) => {

    try {
        res.status(200).send({ status: "OK", data: "All transactions by instrument" });
    } 
    
    catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}



const oneTransaction = (req,res) => {

    try {

        res.status(200).send({ status: "OK", data: "one transaction by instrument" });
    } 
    
    catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}


const newTransaction = (req,res) => {

    const {price,quantity,order_type,price_limit} = req.body
    const {instrument} = req.params

    try {


        if(!quantity || !order_type || !price_limit || !price){
            return res.status(500).send({status:"FAILED",data:"quantity/price limit/price/order type is not specified"})
        }


        else{
            res.status(200).send({ status: "OK", data: "transaction completed" });
        }
    } 
    
    catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const updateTransaction = (req,res) => {

    const {newQuantity} = req.body
    const {instrument,portfolioID} = req.params

    try {
        if(!newQuantity){
            return res.status(500).send({status:"FAILED",data:"new quantity is not specified"})
        }
        
        else if(!instrument || !portfolioID){
            return res.status(500).send({status:"FAILED",data:"instrument/portfolioaID is not specified"})
        }


        else{
            res.status(200).send({ status: "OK", data: "Transaction updated." });
        }
    } 
    
    catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const deleteTransaction = (req,res) => {

    const {instrument,portfolioID} = req.params

    try {
        if(!instrument || !portfolioID){
            return res.status(500).send({status:"FAILED",data:"instrument/portfolioID is not specified"})
        }


        else{
            res.status(200).send({ status: "OK", data: "Transcation has been deleted" });
        }
    } 
    
    catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports = {allTransactions,allTransactionsByInstrument,oneTransaction,newTransaction,updateTransaction,deleteTransaction}