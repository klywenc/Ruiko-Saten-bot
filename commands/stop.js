module.exports = {
	name: 'stop',
	description: 'Zatrzymaj Kolejke',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('Aby zatrzymywać kolejkę musisz być na kanale głosowym!!!');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
	},
};
