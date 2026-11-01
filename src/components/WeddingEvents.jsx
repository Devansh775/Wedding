import { events } from '../data/wedding.js';
import EventCard from './EventCard.jsx';

export default function WeddingEvents() {
  return (
    <section className="events-section section-shell" id="events">
      <div className="section-heading">
        <p className="eyebrow">A few days, a lifetime of memories</p>
        <h2>Our wedding <em>celebrations</em></h2>
        <div className="heading-ornament" aria-hidden="true"><span />✦<span /></div>
      </div>
      <div className="events-grid">
        {events.map((event) => <EventCard key={event.id} event={event} />)}
      </div>
    </section>
  );
}