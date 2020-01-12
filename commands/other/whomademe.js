const { Command } = require('discord.js-commando');

module.exports = class WhoMadeMeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'creator',
            aliases: ['bot-maker', 'bot-creator'],
            memberName: 'creator',
            group: 'other',
            description: "Replies with the bot creator's name"
        });
    }

    run(message) {
        message.say(
            'Made by Gaimon, gonna be trying to finish him soon, its taking a while lol :heart:.'
        );
    }
};