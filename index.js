const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message', (message) => {
    if(message.content === 'ping')
        message.reply('pong')
})

bot.login('NDQ2MDExNDAwNzA0MzYwNDQ4.DdzAkw.mdtSSVz_xAkWneJLvwONE6vKqE0')
