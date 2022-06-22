const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const Client = new Discord.Client({
    intents: 32767
});

var nbTicket = 0;

Client.on("ready", async () => {
    Client.user.setPresence({
        activities: [{
            name: `surveiller les ${Client.guilds.cache.get('965263526509830154').memberCount} membres de La PMEM`,
            type: 'PLAYING',
        }],
        status: 'online'
    });

    console.log("bot conecté ✅")
});

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "open-ticket"){
            nbTicket++;

            interaction.guild.channels.create("ticket-" + nbTicket, {
                parent: "988913755750563841",
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL ] 
                    },
                    {
                        id: interaction.user.id,
                        allow: [ Discord.Permissions.FLAGS.VIEW_CHANNEL ]
                    }
                ]
            }).then(channel => {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("close-ticket")
                        .setLabel("fermer le ticket")
                        .setStyle("DANGER")
                        .setEmoji("‼")
                    );
                
                channel.send({content: "<@" + interaction.user.id + "> Voici votre ticket, vous pouvez le fermer avec le bouton en desous <@607324618369531935>", components: [row]});
                console.log("ticket ouvert")
                
                interaction.reply({content: "ticket correctement créé", ephemeral: true});

            });
        }
        else if(interaction.customId === "close-ticket"){
            interaction.channel.setParent("988913902249185300");
    
            var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                    .setCustomId("delete-ticket")
                    .setLabel("supprimer le ticket")
                    .setStyle("DANGER")
                    .setEmoji("‼")
                );
            interaction.message.delete();
    
            interaction.channel.send({content: "Supprimer le ticket", components: [row]});
            console.log("ticket archivé")
    
            interaction.reply({content: "ticket archivé", ephemeral: true});
        }
         else if (interaction.customId === "delete-ticket"){
            interaction.channel.delete();
            console.log("ticket suprimer")
        };
    }
});

Client.on("guildMemberAdd", member => {
    console.log("un membre est arrivé");

    Client.channels.cache.get("965263526509830157").send("★━━━━━━━━━━━━━━━━━━━━★━━━━━━━━━━━━━━━━━━━━★")
    Client.channels.cache.get("965263526509830157").send("Bienvenue <@" + member.id + "> sur le discord de la PMEM")
    Client.channels.cache.get("965263526509830157").send(`Nous sommes **${member.guild.memberCount}** sur le discord`)
    Client.channels.cache.get("965263526509830157").send("★━━━━━━━━━━━━━━━━━━━━★━━━━━━━━━━━━━━━━━━━━★")
    member.roles.add("967045578490015804");

});
Client.on("guildMemberRemove", member => {
    console.log("un membre a quitté le serveur");
    Client.channels.cache.get("965263526509830157").send("★━━━━━━━━━━━━━━━━━━━━★━━━━━━━━━━━━━━━━━━━━★")
    Client.channels.cache.get("965263526509830157").send("<@" + member.id + "> a quité le discord de la PMEM")
    Client.channels.cache.get("965263526509830157").send(`Nous sommes **${member.guild.memberCount}** sur le discord`)
    Client.channels.cache.get("965263526509830157").send("★━━━━━━━━━━━━━━━━━━━━★━━━━━━━━━━━━━━━━━━━━★")
});







/*
const Command = require("../Structure/Command")
module.exports = new Command({
    name: "ticket",
    description: "Permet d'envoyer l'embed des tickets",
    utilisation: "",
    alias: ["ticket", "t"],
    permission: Discord.Permissions.FLAGS.MANAGE_GUILD,
    category: "Ticket",
    cooldown: 10,
    async run(bot, message, args, db) {
        let Embed = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle(`Tickets`)
        .setDescription("Appuyer sur le bouton ci-dessous pour ouvrir un merveilleux ticket")
        .setTimestamp()
        .setFooter({text: `${bot.user.username}`, iconURL: bot.user.displayAvatarURL({dynamic: true})})
        const btn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
        .setStyle("PRIMARY")
        .setLabel("Ouvrir un ticket")
        .setEmoji("📩")
        .setCustomId("ticket"))
        message.author ? await message.delete() : await message.deferReply() && await message.deleteReply();
        await message.channel.send({embeds: [Embed], components: [btn]})
       var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("open-ticket")
                .setLabel("Demande de grade")
                .setStyle("PRIMARY")
                .setEmoji("🎖")
                );
    Client.channels.cache.get("988838957708107816")
    
    .send({content: "Appuyez sur le bouton pour crée un ticket demande de grade", components: [row]});
        },
    };
    }
})
*/



Client.login(process.env.token); 