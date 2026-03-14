import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { AboutThisPage } from '../components/Guide/AboutThisPage';
import { MissionControlCarousel } from '../components/MissionControl/MissionControlCarousel';
import { SocialDock } from '../components/Social/SocialDock';

export const HomePage: React.FC = () => {
    return (
        <main>
            <Hero />
            <AboutThisPage />
            <MissionControlCarousel />
            <SocialDock />
        </main>
    );
};
