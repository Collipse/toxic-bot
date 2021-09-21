module.exports = async (client, interaction) => {
    if (interaction.isCommand()) {
        const command = client.commands.get(interaction.commandName);

        if (command) {
           command.execute(interaction, client);
        } else return;
    }
};