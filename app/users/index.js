//var express = require('express');
const express = require('express');
const router = express.Router();
const userController = require('./userController');

const controllerHandler = (promise, params) => async (req, res, next) => {
  const boundParams = params ? params(req, res, next) : [];
  try {
    const result = await promise(...boundParams);
    return res.json(result || { message: 'OK' });
  } catch (error) {
    return res.status(500) && next(error);
  }
};
const c = controllerHandler;

/* GET all users listing. */
router.get('/', c(userController.getAllUsers, (req, res, next) => [req.params.username]));

/* Add a user. */
router.post('/', function(req, res, next) {
  res.send('Add a user called.')
});

/* Update a user. */
router.put('/:userName', function(req, res, next) {
  res.send('Update a user called');
});

/* GET a single user. */
router.get('/:username', c(userController.getUser, (req, res, next) => [req.params.username]));

/* Delete a user */
router.delete('/:username', c(userController.deleteUser, (req, res, next) => [req.params.username]));

module.exports = router;