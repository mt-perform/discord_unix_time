const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('準備完了！');
});

client.login('トークンをここに貼り付ける');
