require("dotenv").config({ path: "./development.env" });
const TOKEN = process.env.BOT_TOKEN;

const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
	console.log("Ready!");
});

client.login(TOKEN);
