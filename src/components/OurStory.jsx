import { Heart, Sparkles } from 'lucide-react';
import { wedding } from '../data/wedding.js';

export default function OurStory() {
  return (
    <section className="story-section" id="story">
      <div className="story-image" role="img" aria-label="A warm sunset over a palace lake">
        <div className="story-image-caption"><span>Two hearts</span><i>✦</i><span>one journey</span></div>
      </div>
      <div className="story-copy">
        <p className="eyebrow">A note from our families</p>
        <h2>A story written<br />in <em>little moments</em></h2>
        <div className="heading-ornament left" aria-hidden="true"><span />✦<span /></div>
        <p>{wedding.story}</p>
        <p className="family-note"><Heart size={15} fill="currentColor" /> {wedding.familyMessage}</p>
        <span className="story-signoff">With love, {wedding.bride} &amp; {wedding.groom}</span>
        <Sparkles className="story-sparkle" size={23} strokeWidth={1.15} aria-hidden="true" />
      </div>
    </section>
  );
}