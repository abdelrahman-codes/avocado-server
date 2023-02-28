const router = require('express').Router();

const validation = require('../../../server-build/src/middlewares/validation');
const { addSection, uploadPic, getSections, updateSection, deleteSection } = require('../controllers/section');
const { addSectionValidation, updateSectionValidation } = require('../validations/section.validation');

router.get('/', getSections)
router.post('/', uploadPic, validation(addSectionValidation), addSection)
router.put('/:_id', validation(updateSectionValidation), updateSection)
router.delete('/:_id', deleteSection)
module.exports = router;