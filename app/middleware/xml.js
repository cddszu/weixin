const parser = require('fast-xml-parser');
const getRawBody = require("raw-body");
const xmlBufferToString = require('xml-buffer-tostring');


module.exports = options => {
    return async function(ctx, next) {
        try {
            if(ctx.request.header["content-type"] === 'text/xml') {
                let buff = await getRawBody(ctx.request.req);
                const reqBody = parser.parse(xmlBufferToString(buff)).xml;
                ctx.request.body = reqBody
            }
        }catch(e) {
            console.log(e)
        }
        next()
    }
}