module.exports = {
	name: 'nowplaying',
	description: 'Zobacz co leci :).',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Nic nie gram <3.');
		return message.channel.send(`Teraz gram: ${serverQueue.songs[0].title}`);
	},
};
