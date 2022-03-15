const { Client, Intents  } = require("discord.js");
const client = new Client({
  intents: [ Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES ],
});

client.on("ready", () => {
  console.log("The bot is ready");
});
client.on("messageCreate", (msg) => {
  switch (msg.content) {
    case "pong!":
      msg.reply({ content: "pong!" });
  }
});
client.login("OTUwNzQ0NzgzOTM1MTE1Mjg1.YidYFA.G5XxnxogMlQj3R1-CPt3C40Puzs");
