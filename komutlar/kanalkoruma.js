const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.")
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "?";
let kanal = message.mentions.channels.first()
if(!kanal){
  const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
  .setFooter(client.user.username, client.user.avatarURL())
  .setDescription(`Lütfen log kanalını etiketleyiniz, Sistem Otomatik Olarak Aktif Olacaktır.`)
  message.channel.send(embed)
  return
}
  db.set(`kkk_${message.guild.id}`, kanal.id)
  const embed = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setFooter(client.user.username, client.user.avatarURL())
  .setDescription(`Log kanalı; ${kanal} olarak ayarlandı!\n Sistem Aktif Edildi.`)
  message.channel.send(embed)
  return
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kanal-k"],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "kanal-koruma",
  description: "Rol koruma",
  usage: "kanal-koruma"
};