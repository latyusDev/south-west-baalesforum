import {
  Handshake,
  ShieldCheck,
  Megaphone,
  Users,
  UserRound,
  Briefcase,
} from "lucide-react";
import { motion } from "motion/react";
import { Button, PageHero, Section, H2 } from "../components/ui.jsx";

import infrastructure from "../../public/images/infrastructure.png";
import security from "../../public/images/security.png";
import health from "../../public/images/health.png";
import youth from "../../public/images/youth.png";
import commitment from "../../public/images/commitment.jpeg";
import hero from "../../public/images/hero.jpeg";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const scrollView = { once: false, amount: 0.2 };

const mandate = [
  [
    Handshake,
    "Conflict Resolution",
    "Mediating local disputes to ensure peace in our communities.",
  ],
  [
    ShieldCheck,
    "Security Liaison",
    "Partnering with state governments, the military, and local security apparatus to keep communities safe.",
  ],
  [
    Megaphone,
    "Grassroots Advocacy",
    "Channelling the needs of local communities directly to regional development agencies.",
  ],
  [
    Users,
    "Cultural Preservation",
    "Promoting and preserving our rich heritage, traditions and values.",
  ],
];

const focus = [
  [
    "Local Infrastructure & Development",
    "Advocating for road maintenance, basic amenities and ancestral land protection.",
    infrastructure,
  ],
  [
    "Security & Community Policing",
    "Collaborative strategies with regional forces to enhance local intelligence gathering.",
    security,
  ],
  [
    "Environmental & Health Sensitization",
    "Educating communities on proper waste management, flood-risk mitigation and primary healthcare.",
    health,
  ],
  [
    "Youth & Economic Empowerment",
    "Creating pathways to mentor youth on governance and community entrepreneurship.",
    youth,
  ],
];

const structureItems = [
  ["State Chairpersons", "Lagos, Ogun, Oyo, Osun, Ondo, Ekiti"],
  ["Local Government Coordinators", "Community-level coordination"],
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <PageHero
          title="About Us"
          crumb="About Us"
          img="about-hero.jpg"
          text="A united forum of traditional community leaders working for a peaceful, prosperous and culturally vibrant South-West."
        />
      </motion.div>

      {/* Who We Are */}
      <Section className="grid items-center gap-8 md:grid-cols-2">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
        >
          <h2 className="text-2xl font-semibold text-forest">Who We Are</h2>

          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            The South-West Baales Forum is an organization established to unite
            traditional village and community chiefs (Baales) across the six
            southwestern states of Nigeria (Lagos, Ogun, Oyo, Osun, Ondo and
            Ekiti). We serve as a unified umbrella body dedicated to advocating
            for local development, security, and community leadership.
          </p>
        </motion.div>

        <motion.div
          className="h-[360px]"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
        >
          <motion.img
            src={hero}
            alt="South-West Baales Forum"
            className="h-full w-full rounded-md object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Section>

      {/* Core Mandate */}
      <Section>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
        >
          <H2>Our Core Mandate</H2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {mandate.map(([Icon, title, description]) => (
            <motion.div
              key={title}
              variants={cardVariant}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="rounded-md border border-black/10 p-4 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.12, rotate: 4 }}
                transition={{ duration: 0.25 }}
              >
                <Icon className="mx-auto text-gold" size={46} />
              </motion.div>

              <h3 className="mt-3 font-sans text-sm font-semibold">
                {title}
              </h3>

              <p className="mt-1 text-xs text-ink/60">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Organizational Structure */}
      <Section className="text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
        >
          <H2 sub="A well-defined structure for effective leadership and coordination across the region.">
            Organizational Structure
          </H2>
        </motion.div>

        <motion.div
          className="mx-auto flex max-w-md flex-col items-stretch gap-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            variants={cardVariant}
            whileHover={{ x: 6 }}
            className="flex items-center gap-3 rounded bg-forest p-4 text-white"
          >
            <UserRound size={24} />

            <div className="text-left">
              <p className="text-sm font-semibold">Board of Trustees (BoT)</p>
              <p className="text-[11px] text-white/75">
                Provides strategic guidance and oversight
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariant}
            whileHover={{ x: 6 }}
            className="flex items-center gap-3 rounded bg-gold p-4 text-white"
          >
            <Briefcase size={24} />

            <div className="text-left">
              <p className="text-sm font-semibold">Executive Executives</p>
              <p className="text-[11px] text-white/85">
                Day-to-day administration and implementation
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto mt-6 grid max-w-3xl gap-3 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {structureItems.map(([title, description]) => (
            <motion.div
              key={title}
              variants={cardVariant}
              whileHover={{ y: -5 }}
              className="rounded bg-cream p-4 text-center"
            >
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-[11px] text-ink/60">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Key Focus Areas */}
      <Section>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
        >
          <H2 sub="Our strategic focus areas drive meaningful change and sustainable development in our communities.">
            Key Focus Areas &amp; Initiatives
          </H2>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {focus.map(([title, description, image]) => (
            <motion.article
              key={title}
              variants={cardVariant}
              whileHover={{
                y: -7,
                transition: { duration: 0.25 },
              }}
              className="overflow-hidden rounded-b-md shadow-md"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={image}
                  alt={title}
                  className="h-32 w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.35 }}
                />
              </div>

              <div className="p-5">
                <h3 className="mt-3 font-sans text-sm font-semibold">
                  {title}
                </h3>

                <p className="mt-1 text-xs text-ink/60">{description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* Our Commitment */}
      <div className="bg-cream/70">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-6 py-8 md:grid-cols-[1fr_1.2fr]">
          <motion.img
            src={commitment}
            alt="Our commitment to stronger communities"
            className="h-50 w-full rounded object-cover object-center"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={scrollView}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={scrollView}
          >
            <h2 className="text-2xl font-semibold">Our Commitment</h2>

            <p className="mt-3 text-sm text-ink/70">
              We remain steadfast in our commitment to building stronger,
              safer and more prosperous communities across the South-West
              through united traditional leadership.
            </p>

            <motion.div
              className="mt-4 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button to="/contact" variant="green">
                Join the Forum
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}





// import { Handshake, ShieldCheck, Megaphone, Users, UserRound, Briefcase } from "lucide-react";
// import { Img, Button, PageHero, Section, H2 } from "../components/ui.jsx";
// import infrastructure from '../../public/images/infrastructure.png'
// import security from '../../public/images/security.png'
// import health from '../../public/images/health.png'
// import youth from '../../public/images/youth.png'
// import commitment from '../../public/images/commitment.jpeg'
// import hero from '../../public/images/hero.jpeg'

// const mandate = [[Handshake, "Conflict Resolution", "Mediating local disputes to ensure peace in our communities."],
//  [ShieldCheck, "Security Liaison", "Partnering with state governments, the military, and local security apparatus to keep communities safe."], [Megaphone, "Grassroots Advocacy", "Channelling the needs of local communities directly to regional development agencies."], [Users, "Cultural Preservation", "Promoting and preserving our rich heritage, traditions and values."]];
// const focus = [["Local Infrastructure & Development",
//    "Advocating for road maintenance, basic amenities and ancestral land protection.", 
//    infrastructure], ["Security & Community Policing", "Collaborative strategies with regional forces to enhance local intelligence gathering.", security],
//     ["Environmental & Health Sensitization", "Educating communities on proper waste management, flood-risk mitigation and primary healthcare.", health], 
//     ["Youth & Economic Empowerment", "Creating pathways to mentor youth on governance and community entrepreneurship.", youth]];

// export default function About() {
//   return (
//     <>
//       <PageHero title="About Us" crumb="About Us" img="about-hero.jpg" text="A united forum of traditional community leaders working for a peaceful, prosperous and culturally vibrant South-West." />
//       <Section className="grid items-center gap-8 md:grid-cols-2">
//         <div ><h2 className="text-2xl font-semibold text-forest">Who We Are</h2>
//           <p className="mt-3 text-sm leading-relaxed text-ink/70">The South-West Baales Forum is an organization established to unite traditional village and community chiefs (Baales) across the six southwestern states of Nigeria (Lagos, Ogun, Oyo, Osun, Ondo and Ekiti). We serve as a unified umbrella body dedicated to advocating for local development, security, and community leadership.</p></div>
//         <div className="h-[360px]">

//           <img src={hero} className="h-full rounded-md w-full " />
//         </div>
//       </Section>

//       <Section>
//         <H2>Our Core Mandate</H2>
//         <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
//           {mandate.map(([Icon, t, d]) => (
//             <div key={t} className="rounded-md border border-black/10 p-4 text-center">
//               <Icon className="mx-auto text-gold" size={46} />
//               <h3 className="mt-3 font-sans text-sm font-semibold">{t}</h3>
//               <p className="mt-1 text-xs text-ink/60">{d}</p></div>
//           ))}
//         </div>
//       </Section>

//       <Section className="text-center">
//         <H2 sub="A well-defined structure for effective leadership and coordination across the region.">Organizational Structure</H2>
//         <div className="mx-auto flex max-w-md flex-col items-stretch gap-3">
//           <div className="flex items-center gap-3 rounded bg-forest p-4 text-white"><UserRound /><div><p className="text-sm font-semibold">Board of Trustees (BoT)</p><p className="text-[11px] text-white/75">Provides strategic guidance and oversight</p></div></div>
//           <div className="flex items-center gap-3 rounded bg-gold p-4 text-white"><Briefcase /><div><p className="text-sm font-semibold">Executive Executives</p><p className="text-[11px] text-white/85">Day-to-day administration and implementation</p></div></div>
//         </div>
//         <div className="mx-auto mt-6 grid max-w-3xl gap-3 md:grid-cols-2">
//           {[["State Chairpersons", "Lagos, Ogun, Oyo, Osun, Ondo, Ekiti"], ["Local Government Coordinators", "Community-level coordination"]].map(([t, d]) => (
//             <div key={t} className="rounded bg-cream p-4 text-center"><p className="text-sm font-semibold">{t}</p><p className="text-[11px] text-ink/60">{d}</p></div>
//           ))}
//         </div>
//       </Section>

//       <Section>
//         <H2 sub="Our strategic focus areas drive meaningful change and sustainable development in our communities.">Key Focus Areas & Initiatives</H2>
//         <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
//           {focus.map(([t, d, img]) => (
//             <div key={t} className=" shadow-md  rounded-b-md">
//             <img src={img} className="h-32 w-full rounded-t-md" />
//           <div className="p-5">
//             <h3 className="mt-3 font-sans text-sm font-semibold">{t}</h3>
//           <p className="mt-1 text-xs text-ink/60">{d}</p>
//           </div>
//           </div>))}
//         </div>
//       </Section>

//       <div className="bg-cream/70">
//       <div className="mx-auto grid max-w-6xl items-center gap-6 px-6 py-8 md:grid-cols-[1fr_1.2fr]">
//         <img src={commitment} className="h-50 w-full object-cover object-center rounded" />
//         <div>
//           <h2 className="text-2xl font-semibold">Our Commitment</h2><p className="mt-3 text-sm text-ink/70">We remain steadfast in our commitment to building stronger, safer and more prosperous communities across the South-West through united traditional leadership.</p><Button to="/contact" variant="green" className="mt-4">Join the Forum</Button></div>
//       </div></div>
//     </>
//   );
// }
