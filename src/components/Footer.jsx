import { Heart } from 'lucide-react';
import { wedding } from '../data/wedding.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-monogram" href="/" aria-label="Return to home">{wedding.initials}<span>✦</span></a>
      <nav aria-label="Footer navigation"><a href="/#home">Home</a><a href="/gallery">Gallery</a><a href="/#events">Events</a><a href="/#story">Our Story</a><a href="/#blessings">Blessings</a></nav>
      <p>Thank you for being part of our day <Heart size={14} fill="currentColor" /></p>
    </footer>
  );
}