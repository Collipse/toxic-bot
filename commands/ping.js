const { MessageEmbed } = require('discord.js');

module.exports.data = {
    name: 'ping',
    description: 'Display bot latency'
};

module.exports.execute = async (interaction, client) => {
    const embed = new MessageEmbed().setColor('RANDOM');
    const ping = client.ws.ping;

    embed.setDescription(`Ping: **${ping}ms**`);
    await interaction.reply({ embeds: [embed] });
};