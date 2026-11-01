import { ArrowDown, CalendarDays, Sparkles } from 'lucide-react';
import { wedding } from '../data/wedding.js';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-wash" aria-hidden="true" />
      <div className="hero-arch arch-outer" aria-hidden="true"><div className="arch-inner" /></div>
      <span className="hero-sun" aria-hidden="true" />
      <span className="hero-bird bird-one" aria-hidden="true">⌁</span>
      <span className="hero-bird bird-two" aria-hidden="true">⌁</span>
      <div className="hero-couple" aria-hidden="true">
        <span className="couple-veil" /><span className="couple-groom" /><span className="couple-bride" />
      </div>
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><Sparkles size={14} /> A celebration of love and legacy <Sparkles size={14} /></p>
        <p className="hero-welcome">With joy in our hearts,</p>
        <h1 id="hero-title">we invite you<br />to our <em>wedding</em></h1>
        <div className="hero-names"><span>{wedding.bride}</span><span className="name-heart">&amp;</span><span>{wedding.groom}</span></div>
        <p className="hero-date"><CalendarDays size={16} /> {wedding.date}</p>
        <a className="hero-cta" href="#events">Join our celebration <ArrowDown size={16} /></a>
      </div>
      <a className="scroll-cue" href="#events" aria-label="Scroll to wedding events"><span />Scroll to discover</a>
      <div className="hero-bottom-rule" aria-hidden="true"><i /><b>✦</b><i /></div>
    </section>
  );
}