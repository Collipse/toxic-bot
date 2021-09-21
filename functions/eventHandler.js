module.exports = (client) => {
    eventHandler = async (eventFiles) => {
        for (const file of eventFiles) {
            const event = require(`../events/${file}`);
            const name = file.split('.')[0];
            
            client.on(name, event.bind(null, client));
        }
    };
};