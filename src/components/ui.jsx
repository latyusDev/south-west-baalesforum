import { Link } from "react-router-dom";
import logo from '../../public/images/south-logo.png'
import footer_logo from '../../public/images/footer-logo.png'

// Looks for /public/images/<name>; falls back to a green gradient if missing.
export function Img({ name, className = "", alt = "" }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-forest to-gold/70 ${className}`}>
      <img src={`${name}`} alt={alt} loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")}
        className="absolute inset-0 h-full w-full object-cover" />
    </div>
  );
}

export function Logo({ light = true }) {
  return (
    <div className="basis-[30%]" >
      <Link to="/" className="">
      <img src={light ? logo:footer_logo}  className="w-full h-[80px] "/>
      {/* <img src={logo}  className="w-full rounded-full h-[80px] "/> */}
    </Link>
    </div>
  );
}

export function Button({ to = "#", variant = "gold", className = "", children }) {
  const styles = {
    gold: "bg-gold text-forest-dark hover:bg-gold-dark hover:text-white",
    green: "bg-forest text-white hover:bg-forest-dark",
    outline: "border border-white/80 text-white hover:bg-white/10",
  };
  return <Link to={to} className={`inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${styles[variant]} ${className}`}>{children}</Link>;
}

export function PageHero({ title, crumb, text, img }) {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <Img name={img} className="absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest/90 to-forest/40" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="text-5xl font-semibold md:text-6xl">{title}</h1>
        <p className="mt-3 text-xs text-white/70"><Link to="/">Home</Link> <span className="mx-1">›</span> <span className="text-gold">{crumb}</span></p>
        <p className="mt-6 max-w-lg font-serif text-lg text-white/90">{text}</p>
      </div>
    </section>
  );
}

export const Section = ({ children, className = "" }) => <section className={`mx-auto max-w-6xl px-6 py-12 ${className}`}>{children}</section>;
export const H2 = ({ children, sub, center }) => (
  <div className={`mb-8 ${center ? "text-center" : ""}`}>
    <h2 className="text-3xl font-semibold text-forest">{children}</h2>
    {sub && <p className="mt-2 text-sm text-ink/70">{sub}</p>}
  </div>
);
