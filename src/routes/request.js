const router = require('express').Router();

const validation = require('../middlewares/validation');
const { addRequest, uploadFiles, getRequests, deleteRequest, getRequestDetails } = require('../controllers/request');
const { addRequestValidation } = require('../validations/request.validation');

router.get('/', getRequests)
router.get('/:_id', getRequestDetails)

router.post('/', uploadFiles, validation(addRequestValidation), addRequest)
router.delete('/:_id', deleteRequest)
module.exports = router;