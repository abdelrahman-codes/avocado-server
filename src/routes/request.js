const router = require('express').Router();

const validation = require('../../../server-build/src/middlewares/validation');
const { addRequest, uploadFiles, getRequests, deleteRequest } = require('../controllers/request');
const { addRequestValidation } = require('../validations/request.validation');

router.get('/', getRequests)
router.post('/', uploadFiles, validation(addRequestValidation), addRequest)
router.delete('/:_id', deleteRequest)
module.exports = router;