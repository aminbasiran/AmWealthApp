const userLogin = (req,res) => {
    try {
        // *** ADD ***
        const loggedInUser = "i have logged in";
        res.send({ status: "OK", data: loggedInUser });
    } catch (error) {
    res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const userLogout = (req,res) => {
    try {
        // *** ADD ***
        const loggedOutUser = "i have logged out";
        res.send({ status: "OK", data: loggedOutUser });
    } catch (error) {
    res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const userRegister = (req,res) => {
    try {
        // *** ADD ***
        const registeredUser = "user registered";
        res.send({ status: "OK", data: registeredUser });
    } catch (error) {
    res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}



module.exports = {userLogin,userLogout,userRegister}