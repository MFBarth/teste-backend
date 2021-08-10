const { Router } = require('express');

const AdminController = require('../controllers/AdminController');

const adminRouter = Router();
const admincontroller = new AdminController();

adminRouter.post('/', admincontroller.create);
adminRouter.put('/', admincontroller.update);

module.exports = adminRouter;