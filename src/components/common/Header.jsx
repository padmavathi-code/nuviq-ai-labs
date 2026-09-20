import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Why Us", id: "why-us" },
    { name: "Training", id: "training" },
    { name: "Technologies", id: "technologies" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">

        <button
          className="header-logo"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          <img
            src={logo}
            alt="NUVIQ AI LABS"
          />
        </button>

        <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <button
          className="header-quote"
          onClick={() => scrollToSection("contact")}
        >
          Get a Quote
          <ArrowUpRight size={16} />
        </button>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </button>
          ))}

          <button
            className="mobile-quote"
            onClick={() => scrollToSection("contact")}
          >
            Get a Quote
          </button>

        </div>
      )}
    </header>
  );
}

export default Header;