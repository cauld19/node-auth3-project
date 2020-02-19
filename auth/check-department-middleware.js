module.exports = (department) => {
    return function (req, res, next) {
        if (req.decodedJwt.department && req.decodedJwt.department.includes(department)) {
            next();
        } else {
            res.status(403).json({ you: "don't have permission" });
        }
    }
}