let handler = async (m, { conn, command }) => {
    let txt = `*[ Chat Dengan Creator ]*
wa.me/${numberowner}

╔╣ *PREMIUM USER*
║ • 10.000 Limit
║ • Full Akses Chat
╚══╣ *Harga :* Rm 5.00 / bulan

╔╣ *SEWA BOT*
║ • Dapat Premium
║ • Bebas Invit ke 2 Grup
╚══╣ *Harga :* Rm 10.00 / bulan

- Pembayaran via *TNG/Bank*
  *( tidak ada opsi lain )*
  ke nomor ${numberowner}
- Whatsapp Multi Device
- Run via Panel (Always ON)`;

    try {
        await conn.relayMessage(m.chat, {
            requestPaymentMessage: {
                currencyCodeIso4217: 'IDR',
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
