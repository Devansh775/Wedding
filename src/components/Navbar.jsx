import { useState } from 'react';
import { Camera, Download, Gift, Heart, House, Menu, X, CalendarDays } from 'lucide-react';
import { wedding } from '../data/wedding.js';

const links = [
  { label: 'Home', href: '/', icon: House },
  { label: 'Gallery', href: '/gallery', icon: Camera },
  { label: 'Events', href: '/#events', icon: CalendarDays },
  { label: 'Our Story', href: '/#story', icon: Heart },
  { label: 'Blessings', href: '/#blessings', icon: Gift },
];

export default function Navbar({ gallery = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand-mark" href="/" aria-label={`${wedding.initials} wedding home`}>
        <span className="brand-flourish" aria-hidden="true">✦</span>
        <span>{wedding.initials}</span>
        <span className="brand-flourish" aria-hidden="true">✦</span>
      </a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {links.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} className={gallery && label === 'Gallery' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            <Icon size={15} strokeWidth={1.8} /> <span>{label}</span>
          </a>
        ))}
      </nav>
      <a className="download-link" href="/gallery">
        <span>Download Photos</span><Download size={16} />
      </a>
    </header>
  );
}