const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

// Buraya az önceki müzik fonksiyonları (Spotify/YouTube çözümleme, sıra, player) ekleniyor.
// Mesaj kodunu => interaction.commandName'e göre uyarlayacağız.

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
  const serverQueue = queues.get(interaction.guild.id);

  if (commandName === "çal") {
    const query = interaction.options.getString("sorgu");
    // Burada şarkı çözümleme + sıraya ekleme olacak
  } else if (commandName === "geç") {
    // ...
  }
  // diğer komutlar aynı şekilde
});

client.login(process.env.TOKEN);