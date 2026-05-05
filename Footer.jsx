function Footer({ name }) {
  return (
    <footer className="footer">
      <span>© 2026 {name}</span>
      <span className="footer-sep">·</span>
      <span>Thực hiện bằng đam mê</span>
    </footer>
  );
}
window.Footer = Footer;
