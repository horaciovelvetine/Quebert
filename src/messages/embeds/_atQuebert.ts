import { MessageEmbed } from 'discord.js';

export const atQuebertEmbed = () => {
	return new MessageEmbed()
		.setTitle('Metaintro.com')
		.setURL('https://www.metaintro.com/')
		.setDescription(
			`Hey, I'm Quebert, a bot built for the Metaintro discord server. See below for a list of things I can help you with!`
		)
		.addFields(
			{ name: 'Twitter', value: `[Twitter](https://twitter.com/metaintro/ 'optional hovertext')`, inline: true },
			{ name: 'Newsletter', value: `[Substack](https://metaintro.substack.com/ 'optional hovertext')`, inline: true },
			{
				name: 'Invite Link',
				value: `[Invite a freind!](https://discord.gg/RWH7TyS7EB/ 'optional hovertext')`,
				inline: true,
			},
			{
				name: 'Help',
				value:
					'type: `!help` to get an introduction to the server explaining the channels, and rules we have in place.',
			},
			{
				name: 'Notify a moderator',
				value: 'type: `!spam` to notify the moderation team of a spammer.',
			},
			{
				name: 'Contribute',
				value: 'type: `!contribute` to get an info on to how to contribute to the server or Quebert.',
			},
			{
				name: 'Collaborate',
				value: 'type: `!collab` to get an info on collaborating with the official Metaintro Discord Server.',
			}
		);
};
