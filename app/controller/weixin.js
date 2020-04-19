'use strict';
const Controller = require('egg').Controller;

class weixin extends Controller {
    async index() {
      const { ctx } = this;
      const result = await ctx.service.mpWeChat.index(ctx.query, ctx.request.body)
      if(typeof result === 'string') {
        const headers = {
          'Content-Type': 'text/xml',
        };
        ctx.set(headers);
      }
      ctx.body = result;
    }
  }
  
  module.exports = weixin;