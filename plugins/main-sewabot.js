let handler = async (m, { conn, command }) => {
    let txt = `*[ Chat Dengan Creator ]*
wa.me/${numberowner}

🩷SERVICE SEWA BOT BELLSOFT>.<🩷

boleh sewa personal&group

UNTUK NEWBIE TESTER : 1HARI

owner:piqa ><
admin:imah ><

(⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠✧⁠*⁠。PRICE LIST
🌺RM 0.50 -PER DAY
🌺RM 5.00 -PER WEEK
🌺RM 8.00 -PER MONTH
🌺RM20.00 -PER YEAR
🌺RM30.00 -PERMANENT JUST FOR GROUP

꒰⁠⑅⁠ᵕ⁠༚⁠ᵕ⁠꒱⁠˖⁠♡RULES BOT♡⁠˖⁠꒰⁠ᵕ⁠༚⁠ᵕ⁠⑅⁠꒱
-JANGAN SPAM BOT
-JANGAN CHAT BOT SESUKA HATI
-JANGAN CALL BOT
-JANGAN ADD BOT SESUKA HATI
KALAU ENGKO TAK RETI NAK IKUT RULES TAKYAH NAK MENGGATAL BELI!!!

TAKE NOTE!!!!!!

GRP NI BUKAN NTUK POMOT!!! 
PMOT? AUTO KICK
JUST POR BOT!!
TAK DENGAR CAKP? AUTOOOOO BAN&&BLACKLIST!!!!!

- Pembayaran via *TNG/Bank*
  *( tidak ada opsi lain )*
  ke nomor ${numberowner}
- Whatsapp Multi Device
- Run via Panel (Always ON)`;

    try {
        await conn.relayMessage(m.chat, {
            requestPaymentMessage: {
                currencyCodeIso4217: 'RM',
                amount1000: 25000 * 1000,
                requestFrom: '0@s.whatsapp.net',
                noteMessage: {
                    extendedTextMessage: {
                        text: txt,
                        contextInfo: {
                            mentionedJid: [m.sender],
                            externalAdReply: {
                                showAdAttribution: false
                            }
                        }
                    }
                }
            }
        }, {});
    } catch (error) {
        console.error(error);
    }
};

handler.help = ['sewabot'];
handler.tags = ['main'];
handler.command = /^(sewa|sewabot)$/i;

module.exports = handler;
