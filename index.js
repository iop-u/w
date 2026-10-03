const axios = require('axios');
const keep_alive = require('./keep_alive.js')
const reminderMessage = 'فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا فري فري سيريا ';
const intervalMilliseconds = 3000;

const tokens = [
    process.env.token
];
const channelIds = [
    '1556028888067346452',
    '1556032383466209351'
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
