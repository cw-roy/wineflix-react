// Header.js
import Navigation from "./Navigation";
import HeroContent from "./HeroContent";

const Header = ({ heroContent }) => {
  return (
    <header className="hero">
      <img className="hero-image" src="/beer-hero.webp" alt="Pub bar" />
      <Navigation />
      <HeroContent {...heroContent} />
    </header>
  );
};

export default Header;
