import github from '$lib/assets/icons/ic_github.svg';
import instagram from '$lib/assets/icons/ic_instagram.svg';
import linkedin from '$lib/assets/icons/ic_linkedin.svg';
import dribbble from '$lib/assets/icons/ic_dribbble.svg';

export default {
	common: {
		full_name: 'Batmagnai Munkhnasan',
		position: 'Front-End Developer (Web / Mobile / UI / UX)',
		header: {
			logo: null,
			projects: 'Projects',
			contact: 'Contact'
		},
		footer: {
			title: 'You can find me on',
			text: [
				{
					icon: instagram,
					text: 'Instagram',
					link: 'https://www.instagram.com/mgn_prd/'
				},
				{
					icon: github,
					text: 'Github',
					link: 'https://github.com/Magnai1030/'
				},
				{
					icon: linkedin,
					text: 'Linkedin',
					link: 'https://www.linkedin.com/in/batmagnai-munkhnasan-027375193/'
				},
				{
					icon: dribbble,
					text: 'Dribbble',
					link: 'https://dribbble.com/Pride1030/'
				}
			]
		}
	},
	home: {
		greeting: 'Hello, I am developer based in Mongolia',
		introduction: [
			{
				title: 'Profile',
				text: 'Front-End Developer with 4 year experience. Building and maintaining applications in the various industries. Proficient in JS Frameworks like React-Native, NextJS and NuxtJS specially mobile application development. Passionate about UI/UX and possess working knowledge of Sketch, Figma and Adobe XD.'
			},
			{
				title: 'Bio',
				text: [
					{
						first: '1997',
						last: 'Born in Mongolia'
					},
					{
						first: '2014',
						last: 'Graduated Highschool (average student hehe)'
					},
					{
						first: '2018',
						last: 'Graduated University (Bachelor Degree 3.1 well actually 3.07 haha)'
					},
					{
						first: '2018 - 2022',
						last: 'developer in various industries (Usually StartUp)'
					},
					{
						first: '2022 - Present',
						last: 'Freelance (Trying improve myself)'
					}
				]
			},
			{
				title: 'My hobby, Interest',
				text: [
					{
						first: 'Art',
						last: 'Drawing (specially sketch), listen music, watching movies (usually binge)'
					},
					{
						first: 'Working Out',
						last: 'Trying to keep my figure :D'
					},
					{
						first: 'Motocycle',
						last: 'Loves muscle bikes'
					},
					{
						first: 'Walking, Hiking',
						last: ''
					},
					{
						first: 'Improving and Trying',
						last: 'It is hard to keep a job without improving myself in this industry'
					}
				]
			}
		]
	}
};
