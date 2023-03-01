const router = require('express').Router();

router.get('/', function (req, res) {
    res.json({ message: "welcome to Avocado" })
})

const headerRoutes = require('./header');
const sectionRoutes = require('./section');
const socialRoutes = require('./social');
const serviceRoutes = require('./service');
const contactUsRoutes = require('./contactUs');
const countryRoutes = require('./country');
const templateRoutes = require('./template');
const templateSectionRoutes = require('./templateSection');
const questionRoutes = require('./question');
const requestRoutes = require('./request');

router.use('/header', headerRoutes);
router.use('/section', sectionRoutes);
router.use('/social', socialRoutes);
router.use('/social', socialRoutes);
router.use('/service', serviceRoutes);
router.use('/contact-us', contactUsRoutes);
router.use('/country', countryRoutes);
router.use('/template', templateRoutes);
router.use('/template/section', templateSectionRoutes);
router.use('/question', questionRoutes);
router.use('/request', requestRoutes);

module.exports = router;