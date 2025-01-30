const { memberID, welcomeID } = require('../config.json');
const { EmbedBuilder } = require('discord.js');
const { red } = require('../colors.json');

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    execute(member) {
        const guild = member.guild;
        const role = guild.roles.cache.get(memberID);
        if (!role) {
            console.log('Role not found');
            return;
        }
        member.roles.add(role)
        const channelID = welcomeID;
        const channel = guild.channels.cache.get(channelID);

        const welcomeEmbed = new EmbedBuilder()
            .setTitle('Welcome!')
            .setDescription(`Welcome to the server, ${member}!\nCheck out the rules in <#866073036070977557>\nOr get some roles in <#1334616284691693621>`)
            .setColor(red)
            channel.send({content: `${member}`, embeds: [welcomeEmbed] });
    },
};