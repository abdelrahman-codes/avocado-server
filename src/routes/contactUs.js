const router = require('express').Router();

const validation = require('../../../server-build/src/middlewares/validation');
const { addContactUs, getContactUs, deleteContactUs } = require('../controllers/contactUs');
const { addContactUsValidation } = require('../validations/contactUs.validation');

router.get('/', getContactUs)
router.post('/', validation(addContactUsValidation), addContactUs)
router.delete('/:_id', deleteContactUs)
module.exports = router;