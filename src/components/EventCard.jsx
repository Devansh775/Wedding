import { CalendarDays, Clock3, MapPin, Flower2, Sparkles, Music2, Flame, Wine, ArrowUpRight } from 'lucide-react';

const icons = { flower: Flower2, sparkles: Sparkles, music: Music2, flame: Flame, glass: Wine };

export default function EventCard({ event, photo }) {
  const Icon = icons[event.icon];
  const hasLocation = event.mapsUrl && event.address !== 'Add full venue address';

  return (
    <article className={`event-card event-${event.id}`}>
      <div className={`event-art ${photo ? 'has-photo' : ''}`}>
        {photo ? (
          <img className="event-photo" src={photo.src} alt={`${event.name} celebration`} />
        ) : (
          <>
            <div className="art-medallion"><Icon size={36} strokeWidth={1.15} /></div>
            <span className="art-orbit orbit-a" /><span className="art-orbit orbit-b" />
            <span className="art-corner art-corner-a" /><span className="art-corner art-corner-b" />
          </>
        )}
        <p>{event.description}</p>
      </div>
      <div className="event-content">
        <div className="event-title-row"><span className="event-number">0{['haldi', 'mehendi', 'sangeet', 'wedding', 'reception'].indexOf(event.id) + 1}</span><h3>{event.name}</h3></div>
        <ul className="event-facts">
          <li><CalendarDays size={15} /><span>{event.date}</span></li>
          <li><Clock3 size={15} /><span>{event.time}</span></li>
          <li><MapPin size={15} /><span><strong>{event.venue}</strong><small>{event.address}</small></span></li>
        </ul>
        {hasLocation ? (
          <a className="event-directions" href={event.mapsUrl} target="_blank" rel="noreferrer">Directions <ArrowUpRight size={14} /></a>
        ) : (
          <span className="event-directions is-placeholder">Directions to be added <MapPin size={14} /></span>
        )}
      </div>
    </article>
  );
}