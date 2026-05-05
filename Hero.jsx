function Hero({ name, eyebrow, desc, stats, onViewWork, onPlayReel }) {
  const parts = name.trim().split(/\s+/);
  // VI name pattern: "Họ [Tên đệm...] Tên"
  // Line 1: everything except last word (e.g. "ĐẶNG HẢI")
  // Line 2: last word in accent color (e.g. "CƯỜNG")
  const firstLine = parts.length >= 2 ? parts.slice(0, -1).join(' ') : '';
  const lastLine = parts.length >= 2 ? parts[parts.length - 1] : name;
  return (
    <section className="hero" id="home">
      <div className="hero__noise"></div>
      <div className="orb orb--1"></div>
      <div className="orb orb--2"></div>
      <div className="orb orb--3"></div>

      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="eyebrow-line"></span>
          <span>{eyebrow}</span>
        </div>
        <h1 className="hero__name">
          {firstLine && <span className="hero__name-line">{firstLine}</span>}
          <span className="hero__name-line hero__name-line--accent">{lastLine}</span>
        </h1>
        <p className="hero__desc">{desc}</p>
        <div className="hero__actions">
          <button className="btn-primary" onClick={onViewWork}>
            <span>Xem tác phẩm</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button className="btn-reel" onClick={onPlayReel}>
            <span className="reel-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </span>
            <span>Xem Showreel</span>
          </button>
        </div>
        <div className="hero__stats">
          <div className="stat-item"><span className="stat-num">{stats.projects}<i className="stat-plus">+</i></span><span className="stat-lbl">Video</span></div>
          <div className="stat-div"></div>
          <div className="stat-item"><span className="stat-num">{stats.years}<i className="stat-plus">+</i></span><span className="stat-lbl">Năm KN</span></div>
          <div className="stat-div"></div>
          <div className="stat-item"><span className="stat-num">{stats.clients}<i className="stat-plus">+</i></span><span className="stat-lbl">Khách hàng</span></div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
