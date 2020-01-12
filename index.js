const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const { prefix, token } = require('./config.json');
var http = require('http');




Structures.extend('Guild', Guild => {
    class MusicGuild extends Guild {
        constructor(client, data) {
            super(client, data);
            this.musicData = {
                queue: [],
                isPlaying: false,
                nowPlaying: null,
                songDispatcher: null
            };
            this.triviaData = {
                isTriviaRunning: false,
                wasTriviaEndCalled: false,
                triviaQueue: [],
                triviaScore: new Map()
            };
        }
    }
    return MusicGuild;
});

const client = new CommandoClient({
    commandPrefix: prefix,
    owner: '461692099058991114'
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['music', 'Music Command Group'],
        ['gifs', 'Gif Command Group'],
        ['other', 'random types of commands group'],
        ['guild', 'guild related commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
    console.log('Oh yeah baby, everythings lookin good!');
    client.user.setActivity('Terraria', 'WATCHING');
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(c => c.name === 'welcome');
    if (!channel) return;
    channel.send(`Welcome ${member}!`);
});

client.login(token);