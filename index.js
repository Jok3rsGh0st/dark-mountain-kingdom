const botconfig = require("./botconfig.json");
const tokenfile = process.env.Token;
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Dark Mountain Kingdom!")
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

//Server Information
  if (cmd === `${prefix}Suggests`){

    //Report and this is the reason
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.memeber.get(args[0]));
    //if(!rUser) return message.channel.send("Couldn't find user.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
      .setDescription("Suggests")
      .setColor("#15f153")
      .addField("Suggested User", `${rUser} with ID: ${rUser.id}`)
      .addField("Suggested By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", reason);

      let reportschannel = message.guild.channels.find(`name`, "suggestion-logs");
      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);
    return;
  }

  if (cmd === `${prefix}Suggests`){
    //Report and this is the reason
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.memeber.get(args[0]));
    //if(!rUser) return message.channel.send("Couldn't find user.");
    let reason = args.join(" ").slice(22);
    let reportEmbed = new Discord.RichEmbed()
      .setDescription("Suggests")
      .setColor("#15f153")
      .addField("Suggested User", `${rUser} with ID: ${rUser.id}`)
      .addField("Suggested By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", reason);

      let reportschannel = message.guild.channels.find(`name`, "suggestion-logs");
      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);
    return;
  }
  //Server Info + Bot
  if(cmd === `${prefix}serverinfo`){
      let sicon = message.guild.displayAvatarURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription("Server Information")
      .setColor("#15f153")
      .setThumbnail(sicon)
      .addField("Server Name", message.guild.name)
      .addField("Created On", message.guild.createdAt)
      .addField("You Joined", message.member.joinAt)
      .addField("Total Members", message.guild.memberCount);
      return message.channel.send(serverembed);
  }
  if(cmd === `${prefix}botinfo`){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Dark Mountain Kingdom", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }
});

bot.login(process.env.Token);
