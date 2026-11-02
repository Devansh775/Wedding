import { useMemo, useState } from 'react';
import { ImagePlus, ArrowLeft, Download } from 'lucide-react';
import { photos, photoCategories } from '../data/photos.js';
import PhotoCard from './PhotoCard.jsx';
import Lightbox from './Lightbox.jsx';

export default function PhotoGallery() {
  const [category, setCategory] = useState('All Photos');
  const [activeIndex, setActiveIndex] = useState(null);
  const [downloadMessage, setDownloadMessage] = useState('');
  const filteredPhotos = useMemo(() => category === 'All Photos' ? photos : photos.filter((photo) => photo.category === category), [category]);

  const downloadPhotos = () => {
    filteredPhotos.forEach((photo) => {
      const link = document.createElement('a');
      link.href = photo.src;
      link.download = photo.filename;
      link.hidden = true;
      document.body.append(link);
      link.click();
      link.remove();
    });

    setDownloadMessage(`${filteredPhotos.length} photo downloads started. Allow multiple downloads if your browser prompts.`);
  };

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
          <div className="gallery-toolbar-actions">
            <button className="gallery-download-all" type="button" onClick={downloadPhotos} disabled={!filteredPhotos.length}>
              <Download size={16} /> Download {category === 'All Photos' ? 'all photos' : `${category} photos`}
            </button>
            <span className="photo-count">{filteredPhotos.length} {filteredPhotos.length === 1 ? 'photo' : 'photos'}</span>
          </div>
        </div>
        {downloadMessage && <p className="download-status" role="status">{downloadMessage}</p>}
        {filteredPhotos.length ? (
          <div className="photo-grid">
            {filteredPhotos.map((photo, index) => <PhotoCard key={photo.id} photo={photo} index={index} onOpen={() => setActiveIndex(index)} />)}
          </div>
        ) : (
          <div className="gallery-empty">
            <div className="empty-art"><ImagePlus size={27} strokeWidth={1.25} /></div>
            <p className="eyebrow">The album is waiting</p>
            <h2>{category === 'All Photos' ? 'Your moments will live here.' : `No ${category} photos yet.`}</h2>
            <p>Add images to the <code>Me/</code> folder to include them in the gallery.</p>
          </div>
        )}
      </section>
      {activeIndex !== null && <Lightbox photos={filteredPhotos} index={activeIndex} onClose={() => setActiveIndex(null)} onChange={setActiveIndex} />}
    </main>
  );
}