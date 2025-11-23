import React from 'react';
import '../styles/About.scss';

const About = () => {
    return (
        <div className="about-page">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>The Art of Distinction</h1>
                    <p className="tagline">Where Heritage Meets Contemporary Elegance</p>
                </div>
            </section>

            <section className="story-section">
                <div className="content-wrapper">
                    <div className="story-block">
                        <h2>Our Legacy</h2>
                        <p>
                            Founded on the principles of uncompromising quality and timeless sophistication,
                            Bougie represents more than a destination for luxury goods—it embodies a philosophy.
                            Each piece in our curated collection tells a story of masterful craftsmanship,
                            where artisans pour decades of expertise into every stitch, every detail, every finish.
                        </p>
                        <p>
                            We believe that true luxury transcends trends. It's found in the weight of premium
                            materials, the precision of expert tailoring, and the confidence that comes from
                            wearing something truly exceptional.
                        </p>
                    </div>

                    <div className="story-block">
                        <h2>Curated Excellence</h2>
                        <p>
                            Our selection process is rigorous and uncompromising. We partner exclusively with
                            ateliers and houses that share our commitment to perfection—those who understand
                            that luxury is earned through dedication, not declared through labels alone.
                        </p>
                        <p>
                            From the supple Italian leathers that grace our handbags to the Swiss precision
                            of our timepieces, from the lustrous silks of our scarves to the architectural
                            brilliance of our eyewear—every item represents the pinnacle of its category.
                        </p>
                    </div>

                    <div className="story-block">
                        <h2>The Bougie Experience</h2>
                        <p>
                            We understand that acquiring luxury is an intimate journey. It's about discovering
                            pieces that resonate with your personal narrative, items that become cherished
                            companions in life's most meaningful moments.
                        </p>
                        <p>
                            Our commitment extends beyond the transaction. We offer a sanctuary where
                            discerning individuals can explore, appreciate, and acquire pieces that will
                            define their legacy. Because true style isn't purchased—it's cultivated.
                        </p>
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="content-wrapper">
                    <h2>Our Pillars</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Authenticity</h3>
                            <p>Every piece is verified, every claim substantiated. We deal only in genuine excellence.</p>
                        </div>
                        <div className="value-card">
                            <h3>Craftsmanship</h3>
                            <p>We celebrate the human touch—the skilled hands that transform raw materials into art.</p>
                        </div>
                        <div className="value-card">
                            <h3>Timelessness</h3>
                            <p>Fashion fades, but style endures. We curate pieces designed to transcend seasons.</p>
                        </div>
                        <div className="value-card">
                            <h3>Exclusivity</h3>
                            <p>Rarity enhances value. Our limited selections ensure your acquisitions remain distinctive.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="closing-section">
                <div className="content-wrapper">
                    <h2>Join Our Circle</h2>
                    <p>
                        Bougie is more than a store—it's a community of connoisseurs who appreciate
                        the finer things. We invite you to explore our collections and discover pieces
                        that speak to your refined sensibilities.
                    </p>
                    <p className="signature">Welcome to the world of Bougie.</p>
                </div>
            </section>
        </div>
    );
};

export default About;
