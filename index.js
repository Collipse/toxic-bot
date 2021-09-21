const { Client, Collection } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();
console.clear();

const client = new Client({ intents: 515 });

client.commands = new Collection();

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

require('./functions/commandHandler')(client);
require('./functions/eventHandler')(client);

commandHandler(commandFiles);
eventHandler(eventFiles);

client.login(process.env.token);