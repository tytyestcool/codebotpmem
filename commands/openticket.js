const { Client, Message } = require("discord.js");

module.exports = {
    run: async (Client, Message, args) => {
        if(!Message.member.permissions.has('ADMINISTRATOR')) return
    }
}