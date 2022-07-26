import { MessageEmbed } from 'discord.js';

export const helpInfo = () => {
	return new MessageEmbed().setTitle(`🚀 Welcome to Metaintro's Discord server!`).addFields(
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
		},
		{
			name: 'Get Verified!',
			value: `Our goal in this Discord is to get you hired. We decided that we are going to verify roles manually. Why? Because it'll help reduce the time to hire for both YOU and the employers that come into our ecosystem 💕

This is how it works:

1. DM me @LaceyK what role you'd like to have assigned to your Discord profile. Either pick as many roles as you'd like from the below list OR create your own! 

Make sure you have DM's turned on for the server! (Do that in your settings).

Accounting
Back End Developer
Blockchain Developer
Biz Dev
Co-Founder/Founder
Community Mod
Content Writer
CTO
Crypto Newbie
DAO Contributor
Developer Advocate
Dev Ops
Engineering Manager
Employer
Finance
Front End Developer
Full Stack Developer
Game Developer
Human Resources Manager
Intern
Javascript Developer
Legal
Management
Marketing 
Media Production
Memer
NFT Analyst
NFT Designer
NodeJS Developer
Non-Technical Manager
Partnerships Manager
Product Manager
Product Marketing Manager
Project Manager
Public Relations
React Developer
Rust Developer
Sales Manager
Smart-contract developer
Social Media Manager
Solidity Developer
Technical Product Manager
Telegram Mod
Twitter Guru
UI/UX Designer
Unity Developer
Venture Capital

Languages:

French
German
Dutch
Spanish
Mandarin 


2. 🚀 Please provide PROOF that you are skilled in your field. Proof can look in some of the following ways:

👉 A link to your portfolio
👉 A link to your GitHub
👉 A screenshot of your role in another community
👉 Social media or press links
👉 If you'd prefer to remain anon - that's ok! Screenshots of you being active elsewhere works.
👉 Any other form of verification that you feel would help us verify that you are legitimate in your field.


💥 Warning 💥
Please follow the above steps! You should only being sending me two things - 1) the role(s) you want and 2) a way to verify it. Do NOT send me anything else. It may take me up to 48 hrs to respond and assign a role.`,
		},
    
	);
};
