import { useState } from 'react';
import { Download, ImageOff } from 'lucide-react';

function safeFilename(photo) {
  const extension = photo.src.split('.').pop()?.split('?')[0] || 'jpg';
  const title = photo.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'wedding-photo';
  return `${title}.${extension}`;
}

export default function PhotoCard({ photo, onOpen, index }) {
  const [failed, setFailed] = useState(false);

  return (
    <article className="photo-card" style={{ '--photo-index': index % 12 }}>
      <button className="photo-preview" onClick={onOpen} aria-label={`View ${photo.title}`}>
        {failed ? <span className="photo-missing"><ImageOff size={25} /> Image unavailable</span> : <img src={photo.src} alt={photo.title} loading="lazy" onError={() => setFailed(true)} />}
      </button>
      <div className="photo-meta"><span><strong>{photo.title}</strong><small>{photo.category}</small></span>
        <a className="icon-button" href={photo.src} download={safeFilename(photo)} aria-label={`Download ${photo.title}`} title="Download photo"><Download size={17} /></a>
      </div>
    </article>
  );
}