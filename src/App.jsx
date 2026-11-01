import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WeddingEvents from './components/WeddingEvents.jsx';
import OurStory from './components/OurStory.jsx';
import Blessings from './components/Blessings.jsx';
import Footer from './components/Footer.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import { wedding } from './data/wedding.js';

export default function App({ initialPage }) {
  const [page] = useState(initialPage);

  if (page === 'gallery') {
    return <><Navbar gallery /><PhotoGallery /><Footer /></>;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WeddingEvents />
        <section className="story-blessings-wrap"><OurStory /><Blessings /></section>
      </main>
      <Footer />
      <span className="page-date" aria-hidden="true">{wedding.dateShort}</span>
    </>
  );
}