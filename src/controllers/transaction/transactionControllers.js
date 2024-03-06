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

    // try {

        

    //     res.status(200).send({ status: "OK", data: "All transactions by portfolio" });
    // } 
    
    // catch (error) {
    //     res
    //         .status(error?.status || 500)
    //         .send({ status: "FAILED", data: { error: error?.message || error } });
    // }
}

module.exports = {allTransactions,allTransactionsByPortfolio,newTransaction}