function Nav({ name, active, onNav }) {
  const items = [
    { id: 'work', label: 'Tác phẩm' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'contact', label: 'Liên hệ' },
  ];
  return (
    <nav className="nav">
      <a className="nav__logo" onClick={() => onNav('home')}>
        <span className="logo-mark"></span>
        <span>{name}</span>
      </a>
      <ul className="nav__links">
        {items.map(it => (
          <li key={it.id}>
            <a
              className={`${active === it.id ? 'active' : ''}${it.id === 'contact' ? ' nav__link--contact' : ''}`}
              onClick={() => onNav(it.id)}
            >{it.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
window.Nav = Nav;
