const { MessageEmbed } = require('discord.js');

module.exports.data = {
    name: 'howgay',
    description: 'Display how gay target user is',
    options: [{
        name: 'target',
        description: 'Target user',
        type: 'USER',
        required: false
    }]
};

module.exports.execute = async (interaction, client) => {
    const target = interaction.options.getUser('target');
    const embed = new MessageEmbed().setColor('RANDOM');
    
    const percentage = Math.floor(Math.random() * 101);

    if (!target) {
        embed.setDescription(`${interaction.member} is **${percentage}%** gay :rainbow_flag:`);
        await interaction.reply({ embeds: [embed] });
    } else {
        embed.setDescription(`${target} is **${percentage}%** gay :rainbow_flag:`);
        await interaction.reply({ embeds: [embed] });
    }
};