module.exports = (req, res, next) => {
    if(!req.userAthlete)
    {
        res.redirect("/auth/signin")
    }
    else if (req.userCoach)
    {
        res.redirect("/coa/signin")
    }
    else{
        next()
    }
}
