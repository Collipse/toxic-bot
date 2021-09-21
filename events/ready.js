const dotenv = require('dotenv');

dotenv.config();

const guildId = process.env.guildId;

module.exports = async (client) => {
    console.log(`${client.user.tag} is now online!`);

    await client.guilds.cache.get(guildId)?.commands.set(client.commandArray);
    await client.user.setActivity('yuski in bed', { type: 'WATCHING' });
};