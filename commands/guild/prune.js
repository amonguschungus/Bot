const { Command } = require('discord.js-commando');

module.exports = class clearCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'clear',
            aliases: ['delete-messages', 'bulk-delete'],
            description: 'Delete up to 99 recent messages',
            group: 'guild',
            memberName: 'clear',
            guildOnly: true,
            userPermissions: ['MANAGE_CHANNELS', 'MANAGE_MESSAGES'],
            args: [{
                key: 'deleteCount',
                prompt: 'How many messages do you want to delete?',
                type: 'integer',
                validate: deleteCount => deleteCount < 100 && deleteCount > 0
            }]
        });
    }

    run(message, { deleteCount }) {
        message.channel
            .bulkDelete(deleteCount)
            .catch(e => {
                console.error(e);
                return message.say(
                    'Something went wrong when trying to delete messages :('
                );
            });
    }
};