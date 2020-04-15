const { getUserFromMention } = require('../util/getUser')

module.exports = {
	name: 'ban',
	description: 'Zbanuj użytkownika',
	execute(message, client) {
		const split = message.content.split(/ +/);
		const args = split.slice(1);

		const member = getUserFromMention(args[0], client);

		if (!member) {
			return message.reply('Musisz spingować kogoś aby go zbanować');
		}

		if (!message.member.hasPermission("MANAGE\_MEMBERS")) {
			return message.reply('Nie mogę zbanować tej osoby.');
		}

		return message.guild.members.ban(member)
			.then(() => message.reply(`${member.username} wyrwał bana!`))
			.catch(error => message.reply('Ooo coś poszło nie tak!.'));
	},
};
