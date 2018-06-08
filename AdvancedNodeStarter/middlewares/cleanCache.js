const { clearHash } = require('../services/cache');

module.exports =  async (req, res, next) => {
  // wait till everything is done
  await next();

  //only then clear the cash
  clearHash(req.user.id);
}