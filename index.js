const axios = require('axios');
const keep_alive = require('./keep_alive.js')
const reminderMessage = 'يبن زبي كسم عايلتك يبن المتخلفة احط خرم أمك بين إيري يبن العرصة بنت الشرموطة كس <@1008090320237506651> أمج فوق زبي يا عيل الكلبة المسعوره كسخت <@1208249694803853414> ذريتك وماماتك القحبة يبن اللقيطة اخرط طيزمك وكسخمتك بزبي يبن التسعة وتسعين قواد ابن المزمولة ارفع راس <@1219692827550679142> اختك القحبة بمنوياتي واخليها تتشمم بإيري وتخضع للرائحة وتتوسل اخرمطه بقاعها المشعر يبن <@1112771350034137108> المخضوعة أحشر طبونمك بعيري <صبودر> بفشج <@1208523590962778123> وجلخ يبن زبي إيري <@1007044182889738342> فشخ منوياته على زوايزمك يبن الحرام مص زبي انت ومامتك الحمارة يبن القحبة أجلخ بكسمواتك وافتح صرم عيلتك الروافض لي يعشقون زب فحلهم دارك المثخن يبن البزولة المليانة لي تقطر حليب وهي تنطط فوق زوبي يبن القحبوشة شخيت كس  أمك يبن الداعرة أشق كسمج المشعر <@1208249694803853414> بثواني يبن العرصَه كسم شرفك الملاعين لي شقيت صدرهم بزب مكحل ومفحم زي كسخالتك وكس جداتك الناشف لي خليته يفزك ويصير يقطر يبن الممحونة كس اسلافك يبن الفاجرة المكشورة بزغرد عشرين راس بطيزمك يبن السافلة الفاجرة بدخ بكس خالتك <ابن الهاربة للبان>كل قطرة من منويات زب الفحل بن الخكري لي جايبين بخرقه ستين راس مثل لي جبتهم بأمك الموسع لها حتشونها الوسخ يبن الوسخة زنيت بشرفك وكسمواتك وشرفك وعرضك وعرضم  اجدادك واسلافك يبن الزانية دقيت حتشونهم بالعيورة< المفضية زي <ابن الخايفة>حافة المسامير يبن المتقوبة <الي يسبوني>كسم عيلتك <ابن المبندة>على  كسخت شرفك <الي متمشكل معاهم>المهان';
const intervalMilliseconds = 3000;

const tokens = [
    process.env.token
];
const channelIds = [
    '1227960230101385300',
    '1227959257119592489',
    '1227959377240002570',
    '1227960176024354836',
    '1227959519334895616'
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
