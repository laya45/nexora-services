export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="logo">
        nexora<span>.</span>
      </a>

      <p>Turning ideas into digital experiences.</p>

      <div className="footer-links">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Nexora Digital. All rights reserved.
      </p>
    </footer>
  );
}