const linebot = require('linebot');
require('dotenv').config();

var bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

bot.on('message', async function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  if (event.message.text === '點名') {
      console.log(await bot.getGroupMember(event.source.groupId));
      event.reply('點名囉');
  }
//   event.reply(event.message.text).then(function (data) {
//     // 當訊息成功回傳後的處理
//   }).catch(function (error) {
//     // 當訊息回傳失敗後的處理
//   });
});

bot.on('memberJoined', function (event) {
    event.reply('歡迎來到斯巴拉希歡樂休閒團,請先前往記事本留下您跑跑ID.');
 });

bot.listen('/linewebhook', 3000, function () {
  console.log('[BOT已準備就緒]');
});