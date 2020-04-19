const Service = require('egg').Service;

class mpWeChatService extends Service {
    async index(query, body) {
        if(query.signature && query.echostr) {
            return this.checkSignature(query)
        }
        console.log(body)
        return 'egg'
    }

    checkSignature(query) {
        return query.echostr
    }
}

module.exports = mpWeChatService