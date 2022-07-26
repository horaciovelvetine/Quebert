import { MessageEmbed } from 'discord.js';

export const contributeInfoEmbed = () => {
	return new MessageEmbed()
		.setTitle('Contribute to the Server')
		.setDescription(
			'As members of the Metaintro community there are ways to contribute & gain both technical and non-technical experience while making the community better at the same time.'
		)
		.addFields(
			{
				name: 'Metaintro Bounties',
				value: `
        A lot of our community members are making the jump from web2 to web3 and need some experience to put on their resume. So, after polling with the community, we decided to release some Metaintro-related bounties! 

        If you're looking for experience to put onto your resume, please check out the bounty board. All bounties will be paid in Kudos (at least for now), and those Kudos will eventually live in your Metaintro wallet! 💕

        🚀 This bounty board will be updated weekly.

        Here's the link 👉 :
        [Metaintro's Bounty Board](https://metaintro.notion.site/Metaintro-Bounty-Board-f3ac804127ca4c5bb829c7c482a32ad1)
        `
			},
			{
				name: 'Quebert',
				value: `

        Quebert is not (yet) ready for community contribution but will be soon. An <#announcements> channel post will be made when were ready for contributors and in the meantime check out the links below.

        Quebert is a bot built specifically for the community which helps manage the community, organize job postings, and... Well whatever you can come up with! If you've never contributed to an open source project in the past find more info about the process: [here](https://github.com/open-source).

        Find Quebert on Github!
        [Quebert's Repository](https://github.com/horaciovelvetine/Quebert)

        Quebert is currently managed by: 
        [@horaciovelvetine](https://github.com/horaciovelvetine)

        Feel free to reach out to <@horaciovelvetine> here on Discord to help get started.
      `,
			}
		);
};
