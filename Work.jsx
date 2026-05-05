function Work({ videos, onOpen }) {
  const [filter, setFilter] = React.useState('all');
  const filters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'event', label: 'Sự kiện' },
    { id: 'product', label: 'Sản phẩm' },
    { id: 'storytelling', label: 'Storytelling' },
    { id: 'trend', label: 'Trend' },
    { id: 'interview', label: 'Phỏng vấn' },
    { id: 'talking-head', label: 'Talking Head' },
  ];
  const shown = videos
    .map((v, i) => ({ v, i }))
    .filter(({ v }) => filter === 'all' || v.category === filter);

  return (
    <section className="work" id="work">
      <div className="work__header">
        <div className="section-label">— Selected Work</div>
        <h2 className="section-title">TÁC PHẨM</h2>
      </div>
      <div className="filter-row">
        {filters.map(f => (
          <button
            key={f.id}
            className={`f-btn ${filter === f.id ? 'active' : ''}`}
            onClick={() => setFilter(f.id)}
          >{f.label}</button>
        ))}
      </div>
      <div className="grid">
        {shown.map(({ v, i }) => (
          <Card key={i} video={v} index={i} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}
window.Work = Work;
