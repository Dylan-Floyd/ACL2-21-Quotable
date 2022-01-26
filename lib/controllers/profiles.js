const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const { name } = req.body;
    const profile = await ProfileService.create(name);
    res.json(profile);
  } catch(error) {
    next(error);
  }
});
