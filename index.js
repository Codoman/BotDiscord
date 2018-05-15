const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')


bot.on('ready', () => {
    bot.user.setAvatar('./avatar.png')
})

bot.on('guildMemberAdd', () => {
    member.createDM().then((channel) => {
        return channel.send('Welcome ' + member.displayName)
    }).catch(console.error)
})

bot.on('message', (message) => {
    if (Google.match(message))
        return Google.action(message) 
        
    if(message.content === 'ping')
        message.reply('pong')
})

bot.login('NDQ2MDExNDAwNzA0MzYwNDQ4.DdzAkw.mdtSSVz_xAkWneJLvwONE6vKqE0')
