module.exports = {
	name: 'skip',
	description: 'Skipowanie piosenek',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('Aby skipować piosenki musisz być na kanale głosowym!');
		if (!serverQueue) return message.channel.send('Nie ma żadnych piosenek w kolejce!');
		serverQueue.connection.dispatcher.end();
	},
};
