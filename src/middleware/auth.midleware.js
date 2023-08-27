const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    // console.log(authHeader);

    let token = authHeader && authHeader.split(" ")[1];
    // console.log(token);
    token = token.slice(1,-1);      

    if (!token) return res.sendStatus(401);
    // console.log(token);
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            console.log(err)
            if (err) return res.sendStatus(403);
            // console.log("after error appear")
            try {
                const { fullName, email } = decoded.requestUser.user;
                // console.log(email);
                req.user = { fullName, email };
                next();
            } catch (error) {
                console.log(error);
                return res.sendStatus(403);
            }
        }
    );
}

module.exports = {
    authenticate,
}