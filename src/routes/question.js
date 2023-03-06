const router = require('express').Router();

const validation = require('../../../server-build/src/middlewares/validation');
const { addQuestion, getQuestion, updateQuestion, deleteQuestion } = require('../controllers/question');
const { addQuestionValidation, updateQuestionValidation } = require('../validations/question.validation');

router.get('/:template', getQuestion)
router.post('/', validation(addQuestionValidation), addQuestion)
router.put('/:_id', validation(updateQuestionValidation), updateQuestion)
router.delete('/:_id', deleteQuestion)
module.exports = router;