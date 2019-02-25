const Discord = require('discord.js');
const client = new Discord.Client();
console.log("working");

client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '-bc') {
         message.react("??")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField(' „ «·«—”«· »Ê«”ÿ… :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**? Sender  :**', `*** ? ${message.author.username}#${message.author.discriminator}***`)
            .addField('***? Server  :***', `*** ? ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('¯', args)
            m.send(``,{embed: bc});
        });
    }
})


 

client.login("NTIwNjI0NDU4NzAwOTQ3NDY2.D02sWg.SZc0_r9TGsPZDjpGA2PtoFSNU7U")