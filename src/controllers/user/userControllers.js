const currentUser = (req,res) => {

    const {user} = req

    try {
        const currentUser = user;
        res.send({ status: "OK", data: currentUser });
    } 
    
    catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}


const updateUser = (req,res) => {

    const {user} = req // search database using this users id
    const {newUsername,newEmail} = req.body

    try {

        if(!newUsername || !newEmail){
            return res.status(500).send({ status: "Failed", data: "no username or email inserted" });
        }


        res.send({ status: "OK", data: "username/email successfully updated"});
    } 
    
    catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const changePassword = (req,res) => {

    const {user} = req
    const {newPassword} = req.body

    try {

        if(!newPassword ){
            return res.status(500).send({ status: "Failed", data: "no password inserted" });
        }

        res.status(200).send({status: "ok",data: "password successfully changed"})
    } 
    
    catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports = {currentUser,updateUser,changePassword}