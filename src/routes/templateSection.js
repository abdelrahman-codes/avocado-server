const router = require('express').Router();

const validation = require('../../../server-build/src/middlewares/validation');
const { addTemplateSection, updateTemplateSection, deleteTemplateSection, getTemplateSection } = require('../controllers/templateSection');
const { addSectionValidation, updateSectionValidation } = require('../validations/templateSection.validation');

router.get('/:template', getTemplateSection)
router.post('/', validation(addSectionValidation), addTemplateSection)
router.put('/:_id', validation(updateSectionValidation), updateTemplateSection)
router.delete('/:_id', deleteTemplateSection)
module.exports = router;