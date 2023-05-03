const router = require('express').Router();

const validation = require('../middlewares/validation');
const { addSocial, getSocial, updateSocial, deleteSocial } = require('../controllers/social');
const { addSocialValidation, updateSocialValidation } = require('../validations/social.validation');

router.get('/', getSocial)
router.post('/', validation(addSocialValidation), addSocial)
router.put('/:_id', validation(updateSocialValidation), updateSocial)
// router.patch('/:_id', uploadPic, updateSocialPic)
router.delete('/:_id', deleteSocial)
module.exports = router;