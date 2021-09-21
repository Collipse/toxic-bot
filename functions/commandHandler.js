module.exports = (client) => {
    commandHandler = async (commandFiles) => {
        client.commandArray = [];

        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);

            if (command.data && command.execute) {
                client.commands.set(command.data.name, command);
                client.commandArray.push(command.data);
            } else {
                return console.log(`Invalid syntax in command '${file.split('.')[0]}'`);
            }
        }
    };
};