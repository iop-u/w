const axios = require('axios');
const keep_alive = require('./keep_alive.js')
const reminderMessage = 'يعني يخوان الناس بتشكي من موضوع هات سیکاره هات سیکاره انا اول واحد بشكي من الموضوع هاض هات سیکاره هات سیکاره بتطلع تلفلك لفة بالحارة برا بلاقوك ولاد حارتك بالله هات سیکاره بتطلع تطش عالشارع الرئيسي بالله هات سیکاره بتطلع بباص بالله هات سيكاره يعني ايمتى قصة السيكاره سيكاره بدها تخلص بالاردن يعني في ناس حاطين قصة السيكاره سيكاره نغمة عتليفوناتهم يا زلمة بتخبيلي دخانك بالدار وبتطلعلي بالشارع تتشحودلي من العالم عيب يزم عز نفسك تجدها يزم الواحد كرامتو فوق كل اشي كل الناس بتعاني من الموضوع هات سيکاره هات سيكاره انا اول واحد بعاني من القصة حلولنا يعمي مشكلة هات سيکاره هات سیکاره بالاردن هاي هاي رح تضل وراثي لولد الولد بالاردن ما رحتخلص والله العظيم الواحد صاير يطش سيكاره يطلع بباص سيكاره يروح يلف لغة سيكاره وهو نايم بقولك روحجبلك من فلان سیکاره یزلمه عيبيعني يخوان الناس بتشكي من موضوع هات سیکاره هات سیکاره انا اول واحد بشكي من الموضوع هاض هات سیکاره هات سیکاره بتطلع تلفلك لفة بالحارة برا بلاقوك ولاد حارتك بالله هات سیکاره بتطلع تطش عالشارع الرئيسي بالله هات سیکاره بتطلع بباص بالله هات سيكاره يعني ايمتى قصة السيكاره سيكاره بدها تخلص بالاردن يعني في ناس حاطين قصة السيكاره سيكاره نغمة عتليفوناتهم يا زلمة بتخبيلي دخانك بالدار وبتطلعلي بالشارع تتشحودلي من العالم عيب يزم عز نفسك تجدها يزم الواحد كرامتو فوق كل اشي كل الناس بتعاني من الموضوع هات سيکاره هات سيكاره انا اول واحد بعاني من القصة حلولنا يعمي مشكلة هات سيکاره هات سیکاره بالاردن هاي هاي رح تضل وراثي لولد الولد بالاردن ما رحتخلص والله العظيم الواحد صاير يطش سيكاره يطلع بباص سيكاره يروح يلف لغة سيكاره وهو نايم بقولك روحجبلك من فلان سیکاره ';
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
