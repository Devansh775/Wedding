import { useMemo, useState } from 'react';
import { ImagePlus, ArrowLeft } from 'lucide-react';
import { photos, photoCategories } from '../data/photos.js';
import PhotoCard from './PhotoCard.jsx';
import Lightbox from './Lightbox.jsx';

export default function PhotoGallery() {
  const [category, setCategory] = useState('All Photos');
  const [activeIndex, setActiveIndex] = useState(null);
  const filteredPhotos = useMemo(() => category === 'All Photos' ? photos : photos.filter((photo) => photo.category === category), [category]);

  return (
    <main className="gallery-page">
      <section className="gallery-intro">
        <a className="back-link" href="/"><ArrowLeft size={16} /> Return to invitation</a>
        <p className="eyebrow">Every moment, gathered in one place</p>
        <h1>Our <em>photographs</em></h1>
        <p>Relive the celebrations, one lovely moment at a time.</p>
      </section>
      <section className="gallery-content" aria-label="Wedding photo gallery">
        <div className="gallery-toolbar">
          <div className="filter-list" role="group" aria-label="Filter photos by event">
            {photoCategories.map((item) => <button key={item} className={`filter-button ${category === item ? 'selected' : ''}`} aria-pressed={category === item} onClick={() => { setCategory(item); setActiveIndex(null); }}>{item}</button>)}
          </div>
          <span className="photo-count">{filteredPhotos.length} {filteredPhotos.length === 1 ? 'photo' : 'photos'}</span>
        </div>
        {filteredPhotos.length ? (
          <div className="photo-grid">
            {filteredPhotos.map((photo, index) => <PhotoCard key={photo.id} photo={photo} index={index} onOpen={() => setActiveIndex(index)} />)}
          </div>
        ) : (
          <div className="gallery-empty">
            <div className="empty-art"><ImagePlus size={27} strokeWidth={1.25} /></div>
            <p className="eyebrow">The album is waiting</p>
            <h2>{category === 'All Photos' ? 'Your moments will live here.' : `No ${category} photos yet.`}</h2>
            <p>Add images to <code>public/images/{category === 'All Photos' ? '&lt;event-folder&gt;' : category.toLowerCase()}/</code>, then list each path in <code>src/data/photos.js</code>.</p>
          </div>
        )}
      </section>
      {activeIndex !== null && <Lightbox photos={filteredPhotos} index={activeIndex} onClose={() => setActiveIndex(null)} onChange={setActiveIndex} />}
    </main>
  );
}