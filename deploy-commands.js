// deploy-commands.js
const { REST, Routes, SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

const commands = [
  new SlashCommandBuilder()
    .setName('çal')
    .setDescription('Şarkı çal')
    .addStringOption(opt => opt.setName('sorgu').setDescription('YouTube/Spotify linki veya şarkı adı').setRequired(true)),

  new SlashCommandBuilder().setName('geç').setDescription('Sonraki şarkıya geç'),
  new SlashCommandBuilder().setName('durdur').setDescription('Müziği durdur'),
  new SlashCommandBuilder().setName('duraklat').setDescription('Şarkıyı duraklat'),
  new SlashCommandBuilder().setName('devam').setDescription('Duraklatılmış şarkıya devam et'),
  new SlashCommandBuilder()
    .setName('ses')
    .setDescription('Ses seviyesini ayarla')
    .addIntegerOption(opt => opt.setName('seviye').setDescription('0-100 arası').setRequired(true)),
  new SlashCommandBuilder().setName('sıra').setDescription('Şarkı sırasını göster'),
  new SlashCommandBuilder().setName('ping').setDescription('Bot gecikmesini ölç')
].map(c => c.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Komutlar yükleniyor...');
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );
    console.log('Slash komutlar başarıyla yüklendi ✅');
  } catch (err) {
    console.error(err);
  }
})();