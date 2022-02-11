const  discord = require('discord.js')
const { Client, Intents } = require('discord.js');
require('dotenv').config();
const fs = require('fs');

const prefix=process.env.PREFIX;
let command_int=0;
for(const file of commandFiles){
    command_int++;
    const command= require('')
}


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.once('ready', () => { 
  console.log('Ready!');
});



client.login(process.env.DISCORD_TOKEN); // 3
