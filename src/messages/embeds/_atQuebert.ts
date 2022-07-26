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
				name: 'Help!',
				value:
					'type: `!help` to get an introduction to the server explaining the channels, and rules we have in place.',
			},
			{
				name: 'Notify the Moderator Team:',
				value: 'type: `!spam` to notify the moderation team of a spammer.',
			},
			{
				name: 'Contribute to the Community:',
				value:
					'type: `!contribute` to get some info on to how to contribute to the server or Quebert through our build into bounties program.',
			},
			{
				name: 'Collaborate with Metaintro!',
				value:
					'type: `!collab` to get info on how to submite a collab request with the official Metaintro Discord Server.',
			},
			{
				name: 'Verify your work skills:',
				value:
					'type: `!verify` to get some info on how to verify your skills, recieve the appropriate roles, and get tagged when relevant opportunities are posted.',
			}
		);
};
