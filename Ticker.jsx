function Ticker({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {doubled.map((s, i) => (
          <div className="ticker-item" key={i}>
            <span className="ticker-dot"></span>{s}
          </div>
        ))}
      </div>
    </div>
  );
}
window.Ticker = Ticker;
