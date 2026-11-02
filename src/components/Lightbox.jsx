import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Download, X } from 'lucide-react';

export default function Lightbox({ photos, index, onClose, onChange }) {
  const photo = photos[index];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onChange((index - 1 + photos.length) % photos.length);
      if (event.key === 'ArrowRight') onChange((index + 1) % photos.length);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('lightbox-open');
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('lightbox-open');
    };
  }, [index, photos.length, onChange, onClose]);

  if (!photo) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      <button className="lightbox-close icon-button" aria-label="Close photo viewer" onClick={onClose}><X size={22} /></button>
      <button className="lightbox-arrow previous icon-button" aria-label="Previous photo" onClick={(event) => { event.stopPropagation(); onChange((index - 1 + photos.length) % photos.length); }}><ArrowLeft size={22} /></button>
      <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
        <img src={photo.src} alt={photo.title} />
        <figcaption><span><strong>{photo.title}</strong><small>{photo.category} · {index + 1} of {photos.length}</small></span>
          <a className="lightbox-download" href={photo.src} download={photo.filename || `${photo.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.${photo.src.split('.').pop()?.split('?')[0] || 'jpg'}`}><Download size={17} /> Download</a>
        </figcaption>
      </figure>
      <button className="lightbox-arrow next icon-button" aria-label="Next photo" onClick={(event) => { event.stopPropagation(); onChange((index + 1) % photos.length); }}><ArrowRight size={22} /></button>
    </div>
  );
}