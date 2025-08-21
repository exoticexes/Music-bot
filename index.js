const { Client, GatewayIntentBits } = require("discord.js");

// dotenv kaldırıldı, Render Environment Variables kullanılacak

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

client.once("ready", () => {
  console.log(`${client.user.tag} olarak giriş yapıldı!`);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;
  const serverQueue = queues.get(interaction.guild.id); // queues objesi botta tanımlı olmalı

  if (commandName === "çal") {
    const query = interaction.options.getString("sorgu");
    // Burada şarkı çözümleme ve sıraya ekleme olacak
  } else if (commandName === "geç") {
    // Diğer komutlar burada
  }
  // Diğer komutlar aynı şekilde
});

// Render’da token environment variable olarak ayarlanmalı
client.login(process.env.DISCORD_TOKEN);
