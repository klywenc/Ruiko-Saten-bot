module.exports = {
	name: 'purge',
	description: 'Czyszczenie Chatu.',
	async execute(message) {
		const args = message.content.split(' ');
		let deleteCount = 0;
		try {
			deleteCount = parseInt(args[1], 10);
		}catch(err) {
			return message.reply('Ile wiadomości mam usunąć?.(max 100)')
		}
        

		if (!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.reply('Mogę usunąć od 2 do 100 wiadomości!');

		const fetched = await message.channel.messages.fetch({
			limit: deleteCount,
		});
		message.channel.bulkDelete(fetched)
			.catch(error => message.reply(`Nie mogę usunąć wiadomości: ${error}`));
	},
};
