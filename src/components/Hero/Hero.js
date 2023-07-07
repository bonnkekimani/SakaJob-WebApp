import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>Get your dream Job </MainHeading>
				<HeroText>
					Browse, Apply, Prepare Your Future Today!
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Job Seeker</Button>
					</Link>
					<HeroButton>Employer</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
