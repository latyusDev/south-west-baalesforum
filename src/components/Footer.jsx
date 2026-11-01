import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./ui.jsx";

const Col = ({ title, items }) => (
  <div>
    <h4 className="mb-3 font-sans text-sm font-semibold">{title}</h4>
    <ul className="space-y-2 text-xs text-white/70">{items.map((i) => <li key={i}>
      {i}</li>)}</ul>
  </div>
);

export default function Footer() {
  const getYear = new Date().getFullYear()
  return (
    <footer className="bg-forest-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light={false} />
          <p className="mt-4 max-w-xs text-xs text-white/70">Preserving heritage, advancing community. A united voice for traditional leaders across South-West Nigeria.</p>
          <div className="mt-4 flex gap-4 text-white/80"><Facebook size={18} /><Twitter size={18} /><Instagram size={18} /><Youtube size={18} /></div>
        </div>
        <Col title="Quick Links" items={["Home", "About Us", "News & Press Releases", "Membership", "Contact Us"]} />
        <Col title="Our Focus" items={["Community Development", "Security & Peace", "Cultural Preservation", "Youth Empowerment", "Environmental Health"]} />
        <div>
          <h4 className="mb-3 text-sm font-semibold">Contact Info</h4>
          <ul className="space-y-3 text-xs text-white/70">
            <li className="flex gap-2"><MapPin size={14} className="shrink-0 text-gold" />61 Ijaola Street, Maryland, Lagos State</li>
            <li className="flex gap-2"><Phone size={14} className="shrink-0 text-gold" />+234 816 204 6944<br />+234 816 204 6944</li>
            <li className="flex gap-2"><Mail size={14} className="shrink-0 text-gold" />info@swbaalesforum.org</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl justify-between px-6 py-4 text-[11px] text-white/60">
          <span>© {getYear} South-West Baales Forum. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
