function Channels({ items }) {
  return (
    <section className="channels" id="channels">
      <div className="section-label">— KÊNH ĐÃ THAM GIA · CHANNELS</div>
      <div className="channels__head">
        <h2 className="channels__title">Kênh<br/>đã làm.</h2>
        <p className="channels__lede">Một số kênh mình đã đồng hành — viết nội dung, dựng clip, set-up góc quay. Click để xem.</p>
      </div>
      <div className="channels__grid">
        {items.map((c, i) => (
          <a key={c.handle} href={c.url} target="_blank" rel="noopener noreferrer" className="ch-card" style={{ '--ch-grad': c.grad }} onClick={(e) => { e.preventDefault(); window.open(c.url, '_blank', 'noopener,noreferrer'); }}>
            <div className="ch-card__top">
              <div className="ch-avatar" style={{ background: c.grad }}>
                <span className="ch-avatar__mono">{c.mono}</span>
                <span className="ch-avatar__ring"></span>
              </div>
              <div className="ch-platform">
                {c.platform === 'youtube' ? (
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none"><path d="M21.6 2.5c-.3-1-1-1.7-2-2C17.8 0 11 0 11 0S4.2 0 2.4.5c-1 .3-1.7 1-2 2C0 4.3 0 8 0 8s0 3.7.4 5.5c.3 1 1 1.7 2 2 1.8.5 8.6.5 8.6.5s6.8 0 8.6-.5c1-.3 1.7-1 2-2 .4-1.8.4-5.5.4-5.5s0-3.7-.4-5.5z" fill="currentColor"/><path d="M8.8 11.4l5.7-3.4-5.7-3.4v6.8z" fill="#080809"/></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.7 0H11v13.5a2.5 2.5 0 1 1-2.5-2.5h.4V7.4h-.4a6 6 0 1 0 6 6V6a8 8 0 0 0 4.5 1.4V4a4.7 4.7 0 0 1-4.3-4z" fill="currentColor"/></svg>
                )}
              </div>
            </div>
            <div className="ch-card__body">
              <div className="ch-handle">{c.handle}</div>
              <div className="ch-name">{c.name}</div>
              <div className="ch-meta">
                <span className="ch-pill">{c.year}</span>
                {c.status && <span className="ch-pill ch-pill--live">● {c.status}</span>}
              </div>
              <div className="ch-roles">
                {c.roles.map(r => <span key={r} className="ch-role">{r}</span>)}
              </div>
            </div>
            <div className="ch-card__foot">
              <span>Xem kênh</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3h8v8M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
window.Channels = Channels;
