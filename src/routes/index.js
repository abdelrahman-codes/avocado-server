const router = require('express').Router();


router.get('/', function (req, res) {
    res.json({ message: "welcome to Avocado" })

})


module.exports = router;