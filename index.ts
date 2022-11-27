import { Client } from "discord.js";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login("");

console.log(client);