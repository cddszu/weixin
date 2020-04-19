'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/weixin', controller.weixin.index);
  router.post('/weixin', controller.weixin.index);
};
