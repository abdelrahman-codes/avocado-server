const router = require('express').Router();

router.get('/', function (req, res) {
    res.json({ message: "welcome to Avocado" })
})

const headerRoutes = require('./header');
const sectionRoutes = require('./section');
const socialRoutes = require('./social');
const serviceRoutes = require('./service');
const contactUsRoutes = require('./contactUs');

router.use('/header', headerRoutes);
router.use('/section', sectionRoutes);
router.use('/social', socialRoutes);
router.use('/social', socialRoutes);
router.use('/service', serviceRoutes);
router.use('/contact-us', contactUsRoutes);

module.exports = router;