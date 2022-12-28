const { format } = require('express/lib/response');
const moment = require('moment');

function formatMessage(username, text) {
    if(username == '') 
        username = 'Chatapp';
        
    return {
        username,
        text,
        time: moment().format('h:mm a')
    }
}

module.exports = formatMessage;