function Contact({ links }) {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="section-label">— Get in touch</div>
        <h2 className="contact__big">
          <span>CÙNG LÀM VIỆC</span><br/>
          <em>VỚI TÔI NHÉ.</em>
        </h2>
        <div className="contact__links">
          {links.map(c => (
            <a className="c-link" href={c.href} target="_blank" rel="noopener noreferrer" key={c.label}>
              <span dangerouslySetInnerHTML={{ __html: c.icon }}></span>
              <span>{c.label}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="contact__bg-text" aria-hidden="true">CONTACT</div>
    </section>
  );
}
window.Contact = Contact;
