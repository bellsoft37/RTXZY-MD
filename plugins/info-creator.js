var name = global.nameowner
var numberowner = global.numberowner
var gmail = global.mail
var handler = async (m, {
conn
}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: ${name}
item.ORG: Creator Bot
item1.TEL;waid=${numberowner}:${numberowner}@s.whatsapp.net
item1.X-ABLabel:Nomor Creator Bot 
item2.EMAIL;type=INTERNET:${gmail}
item2.X-ABLabel:Email Owner
item3.ADR:;;🇮🇩 Indonesia;;;;
item3.X-ABADR:ac
item4.EMAIL;type=INTERNET:support@tioprm.eu.org
item4.X-ABLabel:Email Developer 
item3.ADR:;;🇮🇩 Indonesia;;;;
item3.X-ABADR:ac 
item5.URL:${instagram}
item5.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'CN', 
            contacts: [{ vcard }] 
        }
    }
)
await conn.reply(m.chat, "🩷 𝐒𝐄𝐖𝐀 𝐁𝐎𝐓 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 🩷

*BELL SOFT BOT*

🌺 𝗡𝗔𝗠𝗔 𝗢𝗪𝗡𝗘𝗥 : melody
🌺𝗧𝗔𝗥𝗜𝗞𝗛 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 :
🌺𝗟𝗜𝗠𝗜𝗧 𝗦𝗘𝗪𝗔 ( 𝗗𝗔𝗬 /𝗠𝗢𝗡𝗧𝗛𝗟𝗬 / 𝗬𝗘𝗔𝗥 / 𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡𝗧) : 1 hari
🌺𝗡𝗔𝗠𝗔 𝗚𝗥𝗢𝗨𝗣 : 𝓜𝓮𝓵𝓸𝓑𝓮𝓮 🐝
🌺𝗟𝗜𝗡𝗞 𝗚𝗥𝗢𝗨𝗣 : https://chat.whatsapp.com/ImdR6oTNIMUArmzPqe54JA?mode=gi_t

 𝐋𝐈𝐍𝐊 𝐆𝐑𝐎𝐔𝐏 𝐁𝐎𝐓 
https://chat.whatsapp.com/EHCRr93AxgxLfgjuijvh2d?mode=gi_t

TOLONG SEND FORMAT DALAM GRP!! TAKK SEND BOT TAKKAN JOIN HANTAR SKLI DENGAN BUKTI TF.", sentMsg)}
handler.command = handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.limit = false;
module.exports = handler;
