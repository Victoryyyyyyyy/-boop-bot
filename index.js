const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client({
	intents:[
		"GUILDS",
		"GUILD_MESSAGES",
		"GUILD_MEMBERS"
	]
});
client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}`)
});
client.on("messageCreate", (message) => {
	if (message.content == "Hi"){
		message.reply("Hello world")
	}
});
const welcomeChannelId ="932194485318877318"
client.on("guildMemberAdd", (member) => {
	member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)
})
client.login(process.env.TOKEN);