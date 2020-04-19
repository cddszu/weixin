const Service = require('egg').Service;
const Parser = require("fast-xml-parser").j2xParser;



class mpWeChatService extends Service {
    async index(query, body) {
        if(query.signature && query.echostr) {
            return this.checkSignature(query)
        }
        if(body.MsgType === 'text') {
            let result = await this.replyText(body)
            console.log(result)
            return result
        }
        // console.log(body)
        return 'egg'
    }

    checkSignature(query) {
        return query.echostr
    }

    replyText(body) {
        const resMsg = '<xml>' +
        '<ToUserName><![CDATA[' + body.FromUserName + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + body.ToUserName + ']]></FromUserName>' +
        '<CreateTime>' + parseInt(new Date().valueOf() / 1000) + '</CreateTime>' +
        '<MsgType><![CDATA[text]]></MsgType>' +
        '<Content><![CDATA['+body.Content+']]></Content>' +
        '</xml>';

        return resMsg

        // const parser = new Parser();
        // return parser.parse({
        //     xml: body
        // })
    }
}

module.exports = mpWeChatService