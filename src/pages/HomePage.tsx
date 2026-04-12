import React from 'react';
import { useTranslation } from 'react-i18next';
import { Hero } from '../components/Hero/Hero';
import { AboutThisPage } from '../components/Guide/AboutThisPage';
import { MissionControlCarousel } from '../components/MissionControl/MissionControlCarousel';
import { SocialDock } from '../components/Social/SocialDock';
import { SeoHead } from '../components/Common/SeoHead';

export const HomePage: React.FC = () => {
    const { t, i18n } = useTranslation();

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Gabor Seboek",
        "url": "https://gaborseboek.com",
        "image": "https://gaborseboek.com/assets/hero-cockpit.webp",
        "jobTitle": "Senior QA Specialist",
        "worksFor": {
            "@type": "Organization",
            "name": "Self-Employed"
        },
        "description": "QA Specialist with expertise in eCommerce automation, Playwright, and Cypress. Passionate craftsman: Master Brewer, Beekeeper, Welder, and Artisan Bread Maker.",
        "knowsAbout": [
            "Quality Assurance", "Test Automation", "Playwright", "Cypress", 
            "TypeScript", "Brewing", "Beekeeping", "Welding", "Fermentation"
        ],
        "sameAs": [
            "https://linkedin.com/in/gaborseboek",
            "https://github.com/sebokgabor84"
        ]
    };

    return (
        <main>
            <SeoHead
                title={t('seo.home_title')}
                description={t('seo.home_desc')}
                canonicalUrl="https://gaborseboek.com/"
                ogImage="https://gaborseboek.com/assets/hero-cockpit.webp"
                locale={i18n.language || "en"}
                jsonLd={{...personSchema, description: t('seo.schema_person_desc')}}
            />
            <Hero />
            <AboutThisPage />
            <MissionControlCarousel />
            <SocialDock />
        </main>
    );
};
