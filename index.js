const axios = require('axios');
const keep_alive = require('./keep_alive.js')
const reminderMessage = 'كےـسًےـمِےـكےـ يّےـبّےـ ـنٌےـ ٱلَمِےـنٌےـيّےـوٌكےـة رٱحًےـ ٱطٌےـعَےـنٌےـكےـسًےـمِےـمِےـكےـ يّےـبّےـ ـنٌےـ ٱلَقَےـحًےـبّےـ ة كےـسًےـخٌےـرٱتُےـمِےـكےـ ٱلَعَےـهےـِرة يّےـبّےـ ـنٌےـ ٱلَمِےـنٌےـيّےـوٌكےـة ٱلَشّےـرمِےـوٌطٌےـة كےـسًےـخٌےـوٌٱتُےـمِےـكےـ يّےـبّےـ ـنٌےـ ٱلَفُےـٱجَےـرة ٱلَدِٱشّےـرة <@1380622310234652773><@1334316870119198730> @everyone (اي احد يسبني) ';
const intervalMilliseconds = 2000;

const tokens = [
    process.env.token
];
const channelIds = [
    '1558554687475683329'
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
