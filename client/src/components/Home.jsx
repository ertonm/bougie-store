import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home.scss';

const SECTIONS = [
    {
        id: 0,
        title: "Timeless Elegance.",
        subtitle: "Where luxury meets sophistication.",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=80", // Fashion store
        isHero: true
    },
    {
        id: 1,
        title: "Curated Excellence",
        subtitle: "Each piece tells a story of craftsmanship and prestige.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=80", // Fashion model
        isHero: false
    },
    {
        id: 2,
        title: "Refined Distinction",
        subtitle: "Elevate your wardrobe with pieces that transcend trends.",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=2000&q=80", // Luxury accessories
        isHero: false
    },
    {
        id: 3,
        title: "Join the Circle",
        subtitle: "Discover your signature style today.",
        image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2000&q=80", // Luxury boutique
        isHero: false
    }
];

const Home = ({ onShopNow }) => {
    const [activeSection, setActiveSection] = useState(0);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);
                        setActiveSection(index);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5, // Trigger when 50% visible
            }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const scrollToSection = (index) => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home-container">
            <div className="scroll-indicators">
                {SECTIONS.map((section, index) => (
                    <div
                        key={section.id}
                        className={`indicator-line ${activeSection === index ? 'active' : ''}`}
                        onClick={() => scrollToSection(index)}
                    />
                ))}
            </div>

            {SECTIONS.map((section, index) => (
                <section
                    key={section.id}
                    data-index={index}
                    ref={el => sectionRefs.current[index] = el}
                    className="scroll-section"
                    style={{ backgroundImage: `url(${section.image})` }}
                >
                    <div className="overlay" />

                    <div className={`content ${activeSection === index ? 'visible' : ''}`}>
                        {section.isHero ? (
                            <div className="hero-content">
                                <h1>{section.title}</h1>
                                <p>{section.subtitle}</p>
                                <button className="shop-now-btn" onClick={onShopNow}>Shop Collection</button>
                            </div>
                        ) : (
                            <div className="section-content">
                                <h2>{section.title}</h2>
                                <p>{section.subtitle}</p>
                            </div>
                        )}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Home;
