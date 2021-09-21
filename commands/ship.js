const { MessageEmbed } = require('discord.js');

module.exports.data = {
    name: 'ship',
    description: 'Ship target users',
    options: [{
        name: 'target1',
        description: 'First target user',
        type: 'USER',
        required: true
    },
    {
        name: 'target2',
        description: 'Second target user',
        type: 'USER',
        required: true 
    }]
};

module.exports.execute = async (interaction, client) => {
    const target1 = interaction.options.getUser('target1');
    const target2 = interaction.options.getUser('target2');
    const embed = new MessageEmbed().setColor('RANDOM');
    
    const percentage = Math.floor(Math.random() * 101);

    if (percentage <= 50) {
        embed.setDescription(`${target1} :broken_heart: **${percentage}%** :broken_heart: ${target2}`)
        await interaction.reply({ embeds: [embed] });
    } else {
        embed.setDescription(`${target1} :heart: **${percentage}%** :heart: ${target2}`)
        await interaction.reply({ embeds: [embed] });
    }
};