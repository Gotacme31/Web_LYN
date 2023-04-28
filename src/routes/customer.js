const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.lyn);
router.get('/ini', customerController.list);
router.get('/update', customerController.update);
router.get('/appi', customerController.si);
router.get('/empres', customerController.no);


module.exports = router;