const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Client = new Discord.Client({
    intents: 32767
});


Client.on("ready", async () => {
    Client.user.setPresence({
        activities: [{
            name: `NationsGlory`,
            type: 'PLAYING',
        }],
        status: 'online'
    });

    console.log("bot conecté ✅")
});


const prefix = "$";

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    
    if (message.content === prefix + "ticketPMEM") {

            var row = new Discord.MessageActionRow()
            .addComponents( new Discord.MessageButton()
            .setCustomId("bouton1")
            .setLabel("Monter en grade dans la PMEM")
            .setStyle("SUCCESS")
            .setEmoji("🛒")
            )
            .addComponents( new Discord.MessageButton()
            .setCustomId("bouton2")
            .setLabel("Demande de grade")
            .setStyle("PRIMARY")
            .setEmoji("🎖")
            )
            .addComponents( new Discord.MessageButton()
            .setCustomId("bouton3")
            .setLabel("Signaler un bug")
            .setStyle("DANGER")
            .setEmoji("⚠️")
            )
            .addComponents( new Discord.MessageButton()
            .setCustomId("bouton4")
            .setLabel("Conflit avec un joueur")
            .setStyle("DANGER")
            .setEmoji("💥")
            )
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle('Ticket PMEM')
                .setDescription('ici vous pouver choisir le ticket que vous voulez ouvrir')
                .addFields(
                    { name: 'Choix 1 : ', value: 'Clique sur le 🛒 si tu souhaite monter dans les grades de la PMEM '},
                    { name: 'Choix 2 : ', value: 'Clique sur le 🎖 si il te manque un grade à toi ou a un de tes membres',},
                    { name: 'Choix 3 : ', value: 'Clique sur le ⚠️ si tu as trouvé un bug sur le discord',},
                    { name: 'Choix 4 : ', value: 'Clique sur le 💥 si tu as eu un probleme avec des joueurs PMEM',},)
                .setFooter({ text: "Tous ticket unitil sera sanctioné"})

        message.channel.send({ embeds: [exampleEmbed], components: [row],})};
    }
)

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bouton1"){

            interaction.guild.channels.create("Grade PMEM", {
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
                
                channel.send({content: "<@" + interaction.user.id + "> Voici votre ticket, vous pouvez le fermer avec le bouton en desous", components: [row]});
                Client.channels.cache.get("988582799055405068").send("un ticket à été ouvert")
                
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
            Client.channels.cache.get("988582799055405068").send("un ticket à été archivé")
    
            interaction.reply({content: "ticket archivé", ephemeral: true});
        }
         else if (interaction.customId === "delete-ticket"){
            interaction.channel.delete();
            Client.channels.cache.get("988582799055405068").send("un ticket à été suprimé")
        };
    }
});

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bouton2"){

            interaction.guild.channels.create("Bug grade", {
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
                        .setCustomId("close-ticketgrade")
                        .setLabel("fermer le ticket")
                        .setStyle("DANGER")
                        .setEmoji("‼")
                    );
                
                channel.send({content: "<@" + interaction.user.id + "> Voici votre ticket, vous pouvez le fermer avec le bouton en desous", components: [row]});
                Client.channels.cache.get("988582799055405068").send("un ticket à été ouvert")
                
                interaction.reply({content: "ticket correctement créé", ephemeral: true});

            });
        }
        else if(interaction.customId === "close-ticketgrade"){
            interaction.channel.setParent("988913902249185300");
    
            var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                    .setCustomId("delete-ticketgrade")
                    .setLabel("supprimer le ticket")
                    .setStyle("DANGER")
                    .setEmoji("‼")
                );
            interaction.message.delete();
    
            interaction.channel.send({content: "Supprimer le ticket", components: [row]});
            Client.channels.cache.get("988582799055405068").send("un ticket à été archivé")
    
            interaction.reply({content: "ticket archivé", ephemeral: true});
        }
         else if (interaction.customId === "delete-ticketgrade"){
            interaction.channel.delete();
            Client.channels.cache.get("988582799055405068").send("un ticket à été suprimé")
        };
    }
});

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bouton3"){

            interaction.guild.channels.create("Bug discord", {
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
                        .setCustomId("close-ticketbug")
                        .setLabel("fermer le ticket")
                        .setStyle("DANGER")
                        .setEmoji("‼")
                    );
                
                channel.send({content: "<@" + interaction.user.id + "> Voici votre ticket, vous pouvez le fermer avec le bouton en desous", components: [row]});
                Client.channels.cache.get("988582799055405068").send("un ticket à été ouvert")
                
                interaction.reply({content: "ticket correctement créé", ephemeral: true});

            });
        }
        else if(interaction.customId === "close-ticketbug"){
            interaction.channel.setParent("988913902249185300");
    
            var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                    .setCustomId("delete-ticketbug")
                    .setLabel("supprimer le ticket")
                    .setStyle("DANGER")
                    .setEmoji("‼")
                );
            interaction.message.delete();
    
            interaction.channel.send({content: "Supprimer le ticket", components: [row]});
            Client.channels.cache.get("988582799055405068").send("un ticket à été archivé")
    
            interaction.reply({content: "ticket archivé", ephemeral: true});
        }
         else if (interaction.customId === "delete-ticketbug"){
            interaction.channel.delete();
            Client.channels.cache.get("988582799055405068").send("un ticket à été suprimé")
        };
    }
});

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bouton4"){

            interaction.guild.channels.create("Report joueur", {
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
                        .setCustomId("close-ticketreport")
                        .setLabel("fermer le ticket")
                        .setStyle("DANGER")
                        .setEmoji("‼")
                    );
                
                channel.send({content: "<@" + interaction.user.id + "> Voici votre ticket, vous pouvez le fermer avec le bouton en desous", components: [row]});
                Client.channels.cache.get("988582799055405068").send("un ticket à été ouvert")
                
                interaction.reply({content: "ticket correctement créé", ephemeral: true});

            });
        }
        else if(interaction.customId === "close-ticketreport"){
            interaction.channel.setParent("988913902249185300");
    
            var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                    .setCustomId("delete-ticketgrade")
                    .setLabel("supprimer le ticket")
                    .setStyle("DANGER")
                    .setEmoji("‼")
                );
            interaction.message.delete();
    
            interaction.channel.send({content: "Supprimer le ticket", components: [row]});
            Client.channels.cache.get("988582799055405068").send("un ticket à été archivé")
    
            interaction.reply({content: "ticket archivé", ephemeral: true});
        }
         else if (interaction.customId === "delete-ticketreport"){
            interaction.channel.delete();
            Client.channels.cache.get("988582799055405068").send("un ticket à été suprimé")
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


Client.login(process.env.token); 