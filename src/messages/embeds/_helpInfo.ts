import { MessageEmbed } from 'discord.js';

export const helpInfoEmbed = () => {
	return new MessageEmbed()
		.setTitle(`🚀 Welcome to Metaintro's Discord server!`)
		.setDescription('An introduction to who we are and what we do!')
		.addFields(
			{
				name: `😎 What is Metaintro?`,
				value: 'Metaintro is a web3 is the professional resume wallet for web3.',
			},
			{
				name: `🏡💻 What is the point of this server?`,
				value: `While we work hard building Metaintro, we realize there are contribution opportunities that need to be filled ASAP. So... we built this Discord server. Jobs will be released daily under the Jobs category. We encourage our community to list their own hiring needs as well in that channel. When you're listing your own opportunities, please make sure you're descriptive in your hiring needs and note the pay rates (if any)!`,
			},
			{
				name: `🤔 Is Metaintro live yet?`,
				value: `No - but soon! We'll let you know when you can get on the waiting list. You can also stay up-to-date on what we're building and discover new job opportunities by hanging out and networking in our Discord channel. `,
			}
		);
};
