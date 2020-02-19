module.exports = (department) => {
    return function (req, res, next) {
        console.log("middleware", req)
        if ((req.decodedJwt.department && req.decodedJwt.department.includes('herm')) || req.decodedJwt.department && req.decodedJwt.department.includes('finance')) {
            next();
        } else {
            res.status(403).json({ you: "don't have permission" });
        }
    }
}