'use strict';
const Controller = require('egg').Controller;

class weixin extends Controller {
    async index() {
      const { ctx } = this;
      console.log(ctx.request.body)
      const result = await ctx.service.mpWeChat.index(ctx.query, ctx.request.body)
      ctx.body = ctx.query.echostr;
    }
  }
  
  module.exports = weixin;