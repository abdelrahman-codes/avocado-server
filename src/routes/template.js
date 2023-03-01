const router = require('express').Router();

const validation = require('../../../server-build/src/middlewares/validation');
const { addTemplate, getTemplate, updateTemplate, deleteTemplate } = require('../controllers/template');
const { addTemplateValidation, updateTemplateValidation } = require('../validations/template.validation');

router.get('/', getTemplate)
router.post('/', validation(addTemplateValidation), addTemplate)
router.put('/:_id', validation(updateTemplateValidation), updateTemplate)
router.delete('/:_id', deleteTemplate)
module.exports = router;