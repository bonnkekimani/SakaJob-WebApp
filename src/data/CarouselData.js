export const data = [
	{
		title: 'Deloitte',
		description:
			'Deloitte provides industry-leading audit, consulting, tax and advisory services to many of the world’s most admired brands, including nearly 90% of the Fortune 500® and more than 7,000 private companies.',
		image: 'https://dwglogo.com/wp-content/uploads/2016/12/Deloitte-Logo-01.png',
	},
	{
		title: 'PwC',
		description: 'PwC is a community of solvers where people are powered by technology to turn today’s ideas into tomorrow’s solutions by connecting people with diverse backgrounds and skillset.',
		image: 'https://www.channelinsider.com/wp-content/uploads/2022/03/CI.Profile.PwC_-1024x1024.jpg',
	},
	{
		title: 'Safaricom PLC',
		description: 'Safaricom is the leading telecommunication company in East Africa and it purposes is to transform lives by connecting people to people, people to opportunities and people to information.',
		image: 'https://www.safaricom.co.ke/images/baze.jpeg',
	},
	{
		title: 'KPMG',
		description: 'KPMG" stands for "Klynveld Peat Marwick Goerdeler". The initialism was chosen when KMG merged with Peat Marwick.It is a global network of professional firms providing Audit, Tax and Advisory services.',
		image: 'https://consultancy32.com/wp-content/uploads/2019/10/KPMG-logo.jpg',
	},
	{
		title: 'KRA',
		description: 'The Kenya Revenue Authority is a company headquartered in Kenya that is responsible for the collection of revenue on behalf of the Kenyan government.',
		image:'https://www.businesslist.co.ke/img/ke/h/1687416390-23-kenya-revenue-authority.jpg'
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
