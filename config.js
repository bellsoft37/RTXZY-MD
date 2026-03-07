require("dotenv").config();

global.owner = ["60192922446"]; // wajib di isi tidak boleh kosong
global.mods = ["60192922446"]; // wajib di isi tidak boleh kosong
global.prems = ["60192922446"]; // wajib di isi tidak boleh kosong
global.nameowner = "Piqaa Kawaii ><"; // wajib di isi tidak boleh kosong
global.numberowner = "60192922446"; // wajib di isi tidak boleh kosong
global.mail = "syafiqanabila37@gmail.com"; // wajib di isi tidak boleh kosong
global.gc = "https://chat.whatsapp.com/EHCRr93AxgxLfgjuijvh2d?mode=gi_t"; // wajib di isi tidak boleh kosong
global.instagram = "https://instagram.com/qee4iq"; // wajib di isi tidak boleh kosong
global.wm = "© Piqaa Kawaii ><"; // isi nama bot atau nama kalian
global.wait = "_*Tunggu sedang di proses...*_"; // ini pesan simulasi loading
global.eror = "_*Server Error*_"; // ini pesan saat terjadi kesalahan
global.stiker_wait = "*⫹⫺ Stiker sedang dibuat...*"; // ini pesan simulasi saat loading pembuatan sticker
global.packname = "Made by"; // watermark stikcker packname
global.author = "BellSoft Bot"; // watermark stikcker author
global.maxwarn = "5"; // Peringatan maksimum Warn

global.autobio = true; // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = false; // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: false)
global.spam = false; // Set true/false untuk anti spam (default: false)
global.gcspam = false; // Set true/false untuk menutup grup ketika spam (default: false)

// APIKEY INI WAJIB DI ISI! //
global.btc = "piqaa";
// global.btc = process.env.API_KEY_BTC;
// aktifkan akses .env di atas jika kamu ingin menaruh key api di .env
// Daftar terlebih dahulu https://api.botcahx.eu.org

// AKSESKEY INI DI ISI JIKA DIPERLUKAN (e.g suno ai (ai music ) & fitur prem lainnya//
global.aksesKey = "piqaa";
// global.aksesKey = process.env.API_KEY_BTC_AKSESKEY;
// aktifkan akses .env di atas jika kamu ingin menaruh key api di .env
// Daftar terlebih dahulu https://api.botcahx.eu.org

// Tidak boleh diganti atau di ubah
global.APIs = {
  btc: "https://api.botcahx.eu.org",
};

//Tidak boleh diganti atau di ubah
global.APIKeys = {
  "https://api.botcahx.eu.org": global.btc,
};

let fs = require("fs");
let chalk = require("chalk");
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  delete require.cache[file];
  require(file);
});

