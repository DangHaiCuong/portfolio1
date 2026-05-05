function About({ aboutText, skills, stats, portrait }) {
  return (
    <section className="about" id="about">
      <div className="about__wrap">
        <div className="about__visual">
          <div className="about__photo-frame">
            {portrait
              ? <img className="about__photo" src={portrait} alt="Portrait" />
              : (
                <div className="about__photo-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                  <span>Ảnh của bạn</span>
                </div>
              )
            }
            <div className="about__photo-badge">Available for work</div>
          </div>
          <div className="about__numbers">
            <div className="about-num"><span>{stats.projects}<i className="stat-plus">+</i></span><small>Video</small></div>
            <div className="about-num"><span>{stats.years}<i className="stat-plus">+</i></span><small>Năm KN</small></div>
          </div>
        </div>
        <div className="about__body">
          <div className="section-label">— About Me</div>
          <h2 className="section-title">CÂU CHUYỆN</h2>
          <div style={{ height: 20 }}></div>
          <p className="about__text">{aboutText}</p>
          <p className="tools-label">CÔNG CỤ &amp; KỸ NĂNG</p>
          <div className="tools-grid">
            {skills.map(s => <span className="tool-tag" key={s}>{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
