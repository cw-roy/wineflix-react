// Navigation.js
import NavigationLink from "./NavigationLink";

const Navigation = () => {
  return (
    <nav className="navigation">
      <section className="primary-navigation">
        <h1>BeerFlix</h1>
        <ul className="navigation-links">
          <NavigationLink href="https://jazzy-syrniki-e1e880.netlify.app/" text="Home" />
          <NavigationLink href="https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git" text="Stout" />
          <NavigationLink href="https://www.netlify.com/" text="Pale" />
          <NavigationLink href="https://github.com/cw-roy/wineflix-react" text="Ale" />
        </ul>
      </section>
      <section className="secondary-navigation">
        <span className="user-avatar">
          <a href="https://youtu.be/AOqY6disSVI">BF</a>
        </span>
      </section>
    </nav>
  );
};

export default Navigation;
