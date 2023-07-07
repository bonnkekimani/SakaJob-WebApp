import React from 'react';

import { AiFillSmile } from "react-icons/ai";
import { AiFillCustomerService } from "react-icons/ai";
import { AiOutlineAim } from 'react-icons/ai';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { AiOutlineBook } from 'react-icons/ai';
import { AiOutlineHeart } from "react-icons/ai";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Succeed together',
		description: 'Achieve collective impact by being generous with our time, care, and expertise. ',
		icon: iconStyle(AiFillSmile),
		imgClass: 'two',
	},
	{
		name: 'Create customer buzz',
		description: 'Our customers are at the heart of everything we do.',
		icon: iconStyle(AiFillCustomerService),
		imgClass: 'two',
	},
	{
		name: 'Find a better way',
		description: 'Fixing what’s broken and making what works even better.',
		icon: iconStyle(AiOutlineHeart),
		imgClass: 'two',
	},
	{
		name: 'Learn things',
		description: 'Reading, going to conferences and constantly pursuing new understanding..',
		icon: iconStyle(AiOutlineBook),
		imgClass: 'four',
	},
	{
		name: 'Share things',
		description: 'When we have it, we feed it back into the community.',
		icon: iconStyle(AiOutlineShareAlt),
		imgClass: 'two',
	},
	{
		name: 'Take pride',
		description:
			'Care intensely about company success. Together, we own Saka Job. ',
		icon: iconStyle(AiOutlineAim),
		imgClass: 'six',
	},
];
