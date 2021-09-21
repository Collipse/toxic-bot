const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

module.exports.data = {
    name: 'pat',
    description: 'Pat target user',
    options: [{
        name: 'target',
        description: 'Target user',
        type: 'USER',
        required: true
    }]
};

module.exports.execute = async (interaction, client) => {
    const target = interaction.options.getUser('target');
    const embed = new MessageEmbed().setColor('RANDOM');

    const { response } = await fetch(`https://kawaii.red/api/gif/pat/token=${process.env.apiKey}&type=json/`)
    .then(res => res.json());

    embed.setDescription(`${interaction.member} **patted** ${target}`)
    embed.setImage(response);
    await interaction.reply({ embeds: [embed] })
};