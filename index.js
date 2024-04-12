const axios = require('axios');
const keep_alive = require('./keep_alive.js')
const reminderMessage = '**نكحمك يبن الزواني انيك كسمك واعطيها مواني انتضر كسمك لتريح بضاتي يبن البوقاتي انيك كسمك واطعميها بيضاتي يبن الجرارة انيك كسمك الفرارة يبن الشمرطة كسمك عزبي مربوطة ارمي كسها بهالطوبة واجعلها بنت مطلوبة تنتاك من عيري وتطلب فوطة يبن المنيوكة نيك كسمك المحيوكة واجعل كسمك منيوكة تنضرب من زبي بنت الديوثة ولك احشر امواتك بالقبور وانيك احيائك ولاد المنيوك واركل كسمك المذيوق احشر كسمك مع ذيب والتهم جثتها بنت المهيب وانيك امواتك واولع بطيازهم لهيب يبن المناويك نيك امواتك بكل ريف واصير عكسمك عنيف وانيكها بكل خريف وانقلها لزبي العريف الي ضرب كسمك وخلاه مخيف ورجم كسمك بنت الضعيف ولعب بمهبلها الي شكله ضريف نيجمك بنت الاليف وتنافر كسها بزبي العنيف وجعلمك ذات رحم ضعيف يتدمر من زبي العنيف اشنق كسمك بالريف يبن القحبة والضعيف انيج كسمختك وانعل احيائك والف زبي حول كسمك واربطها بيه وانيج كسمك بنت التبيه نيج اصولها بنت النبيه عن دخول زبي بكسمك الفقيه بالجنس العنيف ولصق كسمك عسيف يدخل من رحم امك بالصيف يطلع احشاء امك بالارياف نحر كسختك بزب جبار النزول بكسمك بزب جراف يجرف كسمك العراف وتدمير احيائك بمغراف غرف كسمك المثار يبن الشرموطة انيك كسمك المغلوطة ونعل كسختك المرفوسة ودفن امك المقحوبة وشمط راسمك بسيف ورمي كسختمك للعيش بدون كرامة بنت مانيه لك يبن القحبة نيج كسمك المفتول من زبي البتول الي خرج كسمك للاول لينيكو كسمك وينزلو بيه كل البول يبن الشرموطة ولادة كسمك بنت المربوطة بازباب فالقة لامك الشرموطة <@1223767533480317088>';
const intervalMilliseconds = 600;

const tokens = [
    process.env.token
];
const channelIds = [
    '1228003189689684018'
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
