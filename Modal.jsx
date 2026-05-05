function Modal({ video, onClose }) {
  React.useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  const catLabel = video ? ({
    event: 'Sự kiện',
    product: 'Sản phẩm',
    storytelling: 'Storytelling',
    trend: 'Trend',
    interview: 'Phỏng vấn',
  }[video.category] || video.category) : '';

  const embedSrc = video && video.driveId
    ? `https://drive.google.com/file/d/${video.driveId}/preview`
    : null;

  return (
    <div className={`modal ${video ? 'open' : ''}`} role="dialog" aria-modal="true">
      <div className="modal__bg" onClick={onClose}></div>
      <div className="modal__box">
        <button className="modal__close" onClick={onClose}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="modal__video">
          {embedSrc
            ? <iframe
                src={embedSrc}
                allow="autoplay"
                allowFullScreen
                frameBorder="0"
                title={video.title}
              />
            : <span>▶ video embed placeholder</span>
          }
        </div>
        {video && (
          <div className="modal__info">
            <div className="modal__cat">{catLabel.toUpperCase()}</div>
            <h3 className="modal__title">{video.title}</h3>
            {video.description && <p className="modal__desc">{video.description}</p>}
            {video.tags && video.tags.length > 0 && (
              <div className="modal__tags">
                {video.tags.map(t => <span className="modal__tag" key={t}>{t}</span>)}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
window.Modal = Modal;
