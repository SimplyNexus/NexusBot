import { Client, GatewayIntentBits } from "discord.js";

require("dotenv").config();

console.log("Bot is starting...");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.login(process.env.TOKEN);

console.log(client);