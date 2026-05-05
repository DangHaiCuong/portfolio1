function Showreel() {
  const [tick, setTick] = React.useState(0);
  const [scene, setScene] = React.useState(0);

  React.useEffect(() => {
    let raf;
    let start = performance.now();
    const loop = (now) => {
      const elapsed = (now - start) / 1000;
      setTick(elapsed);
      // 4 scenes, 4s each = 16s loop
      setScene(Math.floor(elapsed / 4) % 4);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Local time within current scene 0..1
  const sceneT = (tick % 4) / 4;
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const enter = Math.min(1, easeOut(sceneT * 4));
  const exit = sceneT > 0.85 ? (sceneT - 0.85) / 0.15 : 0;
  const opacity = enter * (1 - exit);
  const ty = (1 - enter) * 30 + exit * -20;

  const scenes = [
    { eyebrow: '01 — IDEA',     headline: 'Ý TƯỞNG',    accent: 'BẮT ĐẦU TỪ ĐÂY.',    color: '#E8FF3D' },
    { eyebrow: '02 — SHOOT',    headline: 'QUAY CHỤP',  accent: 'KHUNG HÌNH ĐẸP.',     color: '#f0f0f5' },
    { eyebrow: '03 — EDIT',     headline: 'DỰNG CLIP',  accent: 'CHẶT, NHỊP, GỌN.',    color: '#8B5CF6' },
    { eyebrow: '04 — DELIVER',  headline: 'BÀN GIAO',   accent: 'ĐÚNG HẸN — ĐÚNG Ý.', color: '#E8FF3D' },
  ];
  const s = scenes[scene];

  // Scanline / progress for the strip at bottom
  const totalDur = 16;
  const totalT = (tick % totalDur) / totalDur;

  return (
    <section className="showreel" id="showreel">
      <div className="section-label">— INTRO REEL · 2026</div>
      <h2 className="showreel__title">THE REEL</h2>
      <div className="showreel__frame showreel__frame--live">
        {/* Background grid */}
        <div className="reel-grid"></div>
        {/* Orbs */}
        <div className="reel-orb reel-orb--a"></div>
        <div className="reel-orb reel-orb--b" style={{ background: `radial-gradient(circle, ${s.color}33, transparent 70%)` }}></div>

        {/* Top bar — slate style */}
        <div className="reel-bar reel-bar--top">
          <span>● REC</span>
          <span className="reel-bar__center">SCENE 0{scene + 1} / TAKE 01</span>
          <span>16:9 · 1920×1080</span>
        </div>

        {/* Bottom bar */}
        <div className="reel-bar reel-bar--bot">
          <span>{`00:00:${String(Math.floor((tick % totalDur) * 24)).padStart(2,'0')}`}</span>
          <div className="reel-progress">
            <div className="reel-progress__fill" style={{ width: `${totalT * 100}%` }}></div>
          </div>
          <span>D.H.C · INTRO REEL</span>
        </div>

        {/* Center content */}
        <div className="reel-stage" style={{ opacity, transform: `translateY(${ty}px)` }}>
          <div className="reel-eyebrow">
            <span className="reel-eyebrow__bar" style={{ background: s.color }}></span>
            <span>{s.eyebrow}</span>
          </div>
          <div className="reel-headline">{s.headline}</div>
          <div className="reel-accent" style={{ color: s.color }}>{s.accent}</div>
        </div>

        {/* Scene dots */}
        <div className="reel-dots">
          {scenes.map((_, i) => (
            <span key={i} className={`reel-dot ${i === scene ? 'reel-dot--on' : ''}`}></span>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Showreel = Showreel;
