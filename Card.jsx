function Card({ video, index, onOpen }) {
  // Pseudo-random thumb tint seeded from index
  const tx = 20 + (index * 37) % 60;
  const ty = 30 + (index * 51) % 50;
  const catLabel = {
    event: 'Sự kiện',
    product: 'Sản phẩm',
    storytelling: 'Storytelling',
    trend: 'Trend',
    interview: 'Phỏng vấn',
    'talking-head': 'Talking Head',
  }[video.category] || video.category;
  const thumbSrc = video.driveId
    ? `https://drive.google.com/thumbnail?id=${video.driveId}&sz=w800`
    : null;
  return (
    <div className="card" onClick={() => onOpen(index)}>
      <div className="card__thumb" style={{ '--tx': tx + '%', '--ty': ty + '%' }}>
        {thumbSrc && (
          <img
            src={thumbSrc}
            alt={video.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={e => { e.currentTarget.style.display = 'none'; }}
          />
        )}
      </div>
      <div className="card__num">{String(index + 1).padStart(2, '0')}</div>
      <div className="card__body">
        <div className="card__cat">{catLabel}</div>
        <div className="card__title">{video.title}</div>
      </div>
      <div className="card__arrow">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </div>
  );
}
window.Card = Card;
