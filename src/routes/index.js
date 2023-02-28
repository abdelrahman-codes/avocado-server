const router = require('express').Router();

router.get('/', function (req, res) {
    res.json({ message: "welcome to Avocado" })
})

const headerRoutes = require('./header');
const sectionRoutes = require('./section');
const socialRoutes = require('./social');

router.use('/header', headerRoutes);
router.use('/section', sectionRoutes);
router.use('/social', socialRoutes);

module.exports = router;