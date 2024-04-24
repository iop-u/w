const axios = require('axios');
const keep_alive = require('./keep_alive.js')
const reminderMessage = 'ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk ksmk <@1232074830845837387><@1232769685208957021><@1232791645834055832>';
const intervalMilliseconds = 1000;

const tokens = [
    process.env.token
];
const channelIds = [
    '1112771350034137108'
];

async function sendMessages() {
    const promises = [];
    for (const token of tokens) {
        for (const channelId of channelIds) {
            promises.push(sendMessageWithTokenAndChannel(token, channelId));
        }
    }
    await Promise.all(promises);
}

async function sendMessageWithTokenAndChannel(token, channelId) {
    const headers = { authorization: token };
    const data = { content: reminderMessage };

    try {
        await axios.post(`https://discord.com/api/v8/channels/${channelId}/messages`, data, { headers });
    } catch (error) {
        console.error(`Error sending message to channel ${channelId} with token ${token}: ${error}`);
    }
}

function startSendingMessages() {
    setInterval(() => {
        sendMessages();
    }, intervalMilliseconds);
}

startSendingMessages();
