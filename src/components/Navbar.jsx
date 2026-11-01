import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { Logo, Button } from "./ui.jsx";
import mobile_logo from '../../public/images/south-logo.png'

const links = [["Home", "/"], ["About Us", "/about"], ["Membership", "/membership"], ["Contact Us", "/contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky py-5 top-0 z-50  border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="hidden md:block">
            <Logo />
        </div>
        <div className="md:hidden">
            <img src={mobile_logo} className="size-16 rounded-full" />
        </div>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, to]) => (
            <NavLink key={label} to={to} end className={({ isActive }) =>
              `border-b-2 py-1 text-sm ${isActive && !to.includes("#") ? "border-gold text-gold-dark" : "border-transparent text-ink/70 hover:text-forest"}`}>{label}</NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button to="/contact" variant="green">Become a Member</Button>

        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t px-6 py-4 md:hidden" onClick={() => setOpen(false)}>
          {links.map(([label, to]) => <NavLink key={label} to={to} className="text-sm">{label}</NavLink>)}
        </nav>
      )}
    </header>
  );
}
