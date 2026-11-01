import { Flower2, Heart } from 'lucide-react';

export default function Blessings() {
  return (
    <section className="blessings-section" id="blessings">
      <div className="blessing-ornament" aria-hidden="true"><Flower2 size={54} strokeWidth={0.8} /><span>ॐ</span></div>
      <p className="eyebrow">Your presence is our present</p>
      <h2>Keep us in your <em>blessings</em></h2>
      <p>As we begin this beautiful new chapter, your love and good wishes mean everything to us.</p>
      <div className="blessing-rule" aria-hidden="true"><span /> <Heart size={14} fill="currentColor" /> <span /></div>
      <p className="blessing-family">With gratitude, the {weddingFamily()} family</p>
    </section>
  );
}

function weddingFamily() {
  return 'families';
}