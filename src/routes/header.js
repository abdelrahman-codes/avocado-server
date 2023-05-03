const router = require('express').Router();

const validation = require('../middlewares/validation');
const { addHeader, getHeader, updateHeader, deleteHeader } = require('../controllers/header');
const { addHeaderValidation, updateHeaderValidation } = require('../validations/header.validation');

router.get('/', getHeader)
router.post('/', validation(addHeaderValidation), addHeader)
router.put('/:_id', validation(updateHeaderValidation), updateHeader)
router.delete('/:_id', deleteHeader)
module.exports = router;