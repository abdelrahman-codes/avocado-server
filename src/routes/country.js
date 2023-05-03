const router = require('express').Router();

const validation = require('../middlewares/validation');
const { addCountry, uploadPic, getCountrys, deleteCountry } = require('../controllers/country');
const { addCountryValidation } = require('../validations/country.validation');

router.get('/', getCountrys)
router.post('/', uploadPic, validation(addCountryValidation), addCountry)
router.delete('/:_id', deleteCountry)
module.exports = router;