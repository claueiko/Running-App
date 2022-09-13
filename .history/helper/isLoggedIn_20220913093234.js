module.exports = (req, res, next) => {
    if(!req.userAthlete)
    {
        res.redirect("/auth/signin")
    }
    else{
        next();
    }
}