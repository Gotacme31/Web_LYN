const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.lyn);
router.get('/ini', customerController.list);
router.get('/update', customerController.update);
router.get('/appi', customerController.si);
router.get('/empres', customerController.no);
router.get('/formu', customerController.for);
router.post('/add', customerController.save);
router.get('/nosalio', customerController.chin);
router.get('/salio', customerController.awb);


module.exports = router;