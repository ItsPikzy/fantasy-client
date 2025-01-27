const fantasyClient = require('../../../index.js');

// Setel Kunci WhatsApp Anda
// Anda dapat menemukannya di Situs Web Fantasy RMT -> WhatsApp -> Api Key
const WHATSAPP_KEY = 'rmt-api.whatsapp.WugLmzZmOpD0mhizFzf0M5pn6qcxs25Ry';

const client = new fantasyClient.WhatsApp({
  whatsAppKey: WHATSAPP_KEY
});

const phoneNumber = '6282345678901';

client.status()
.then((response) => {
  console.log(response); // objek JSON
  // Bot WhatsApp sekarang sedang aktif
})
.catch((err) => {
  if(err.httpStatusCode == 501) console.error('Bot WhatsApp saat ini sedang tidak aktif.', err);
  else console.error(err);
});

client.statusKey()
.then((response) => {
  console.log(response); // objek JSON
  // Api key yang diatur masih aktif
})
.catch((err) => {
  if(err.httpStatusCode == 501) console.error('Bot WhatsApp saat ini sedang tidak aktif.', err);
  else console.error(err);
});

client.phoneIsActive(phoneNumber)
.then((response) => {
  console.log(response); // objek JSON
  // Nomor telepon yang diberikan aktif
})
.catch((err) => {
  if(err.httpStatusCode == 408) console.error(`Nomor telepon ${phoneNumber} terdeteksi tidak aktif.`, err);
  else if(err.httpStatusCode == 501) console.error('Bot WhatsApp saat ini sedang tidak aktif.', err);
  else console.error(err);
});

client.sendMessage(phoneNumber, 'Apakah kamu menyukaiku?\nCrush :D')
.then((response) => {
  console.log(response); // objek JSON
  // Pesan berhasil ditambahkan kedalam antrian server
})
.catch((err) => {
  if(err.httpStatusCode == 408) console.error(`Nomor telepon ${phoneNumber} terdeteksi tidak aktif.`, err);
  else if(err.httpStatusCode == 501) console.error('Bot WhatsApp saat ini sedang tidak aktif.', err);
  else console.error(err);
});


client.sendMessage(queueId)
.then((response) => {
  console.log(response); // objek JSON
  // Pesan ditemukan
})
.catch((err) => {
  if(err.httpStatusCode == 501) console.error('Bot WhatsApp saat ini sedang tidak aktif.', err);
  else console.error(err);
});