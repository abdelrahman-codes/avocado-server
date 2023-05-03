const router = require('express').Router();

const validation = require('../middlewares/validation');
const { addService, getService, updateService, deleteService, getOneService } = require('../controllers/service');
const { addServiceValidation, updateServiceValidation } = require('../validations/service.validation');

router.get('/', getService)
router.get('/:_id', getOneService)
router.post('/', validation(addServiceValidation), addService)
router.put('/:_id', validation(updateServiceValidation), updateService)
router.delete('/:_id', deleteService)
module.exports = router;