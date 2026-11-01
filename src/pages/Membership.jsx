import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Users,
  ShieldCheck,
  Megaphone,
  BookOpen,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Section, H2 } from "../components/ui.jsx";
import mountain from "../../public/images/mountain.png";
import president from "../../public/images/president.png";
import Members from "../components/membership/Members.jsx";

const states = ["Lagos", "Ogun", "Oyo", "Osun", "Ondo", "Ekiti"];

const benefits = [
  [
    Users,
    "A Network of Leaders",
    "Connect with Baales across all six South-West states and share what works.",
  ],
  [
    Megaphone,
    "A Stronger Voice",
    "Raise community needs directly with government and development agencies.",
  ],
  [
    ShieldCheck,
    "Security Liaison",
    "Take part in coordinated peace and community security efforts.",
  ],
  [
    BookOpen,
    "Training & Events",
    "Attend forums, workshops and cultural programmes throughout the year.",
  ],
];

const steps = [
  [
    "Submit your application",
    "click the link below and provide your details and community.",
  ],
  [
    "Verification",
    "The state chairperson confirms your standing as a Baale.",
  ],
  [
    "Approval",
    "The Executive Committee reviews and approves your membership.",
  ],
  [
    "Welcome",
    "You receive your membership details and the next forum calendar.",
  ],
];

const field =
  "w-full rounded border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-forest focus:ring-1 focus:ring-forest";

const Label = ({ children, req }) => (
  <label className="mb-1.5 block text-xs font-medium">
    {children}
    {req && <span className="text-red-600"> *</span>}
  </label>
);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const scrollView = {
  once: false,
  amount: 0.2,
};

export default function Membership() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    // TODO: POST form data to your API
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/documents/CIT335-1.pdf";
    link.download = "constitution.pdf";
    link.click();
  };

  const handleRegister = () => {
    window.location.href =
      "https://docs.google.com/forms/d/1PYY8dWTcAehBXnIDF08K5qnW87R6jXoYVVgEVOSf8aE";
  };

  return (
    <>
      {/* Hero Section */}
    <section className="relative overflow-hidden text-center md:text-left bg-forest-dark text-white">
        <img src={mountain} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest-dark/40 to-transparent" />
        <div className="relative mx-auto grid grid-cols-1 max-w-6xl items-end gap-4 px-6 pt-14 md:grid-cols-[1.2fr_1.2fr] md:pt-20">
          <div className="pb-14 md:pb-20 mt-8 md:mt-0">
            <h1 className="text-5xl font-semibold md:text-6xl">Become a Member</h1>
            <p className="mt-3 text-xs hidden md:block text-white/70"><Link to="/">Home</Link> <span className="mx-1">›</span> <span className="text-gold">Membership</span></p>
            <p className="mt-6 md:max-w-md font-serif text-lg text-white/90">Join traditional community leaders across the South-West in building safer, more prosperous communities.</p>
            <button onClick={handleRegister} className="mt-8 inline-flex mr-5 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-forest-dark transition-colors hover:bg-gold-dark hover:text-white">Apply Now</button>
            <button onClick={handleRegister} className="mt-8 cursor-pointer inline-flex rounded-md border-2 bg-transparent  border-gold px-6 py-3 text-sm font-semibold text-white forest-dark transition-colors hover:bg-gold-dark hover:text-white">Register</button>
          </div>
          <img src={president} alt="Portrait of the President" className="row-start-1 md:col-2 rounded-lg h-[400px] md:h-[520px] w-auto " />
        </div>
      </section>

      {/* Members Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={scrollView}
      >
        <Members />
      </motion.div>

      {/* Benefits Section */}
      <Section>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
        >
          <H2 center sub="What you gain as a member of the Forum.">
            Why Join the Forum
          </H2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {benefits.map(([Icon, title, description]) => (
            <motion.div
              key={title}
              variants={cardVariant}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="rounded-md border border-black/10 p-5 text-center"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.12 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="mx-auto text-gold" size={30} />
              </motion.div>

              <h3 className="mt-3 font-sans text-sm font-semibold text-forest">
                {title}
              </h3>

              <p className="mt-1 text-xs text-ink/65">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Membership Process */}
      <div className="bg-cream/70">
        <Section>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollView}
          >
            <H2 center sub="From application to membership in four steps.">
              How Membership Works
            </H2>
          </motion.div>

          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={scrollView}
            className="grid gap-4 md:grid-cols-4"
          >
            {steps.map(([title, description], index) => (
              <motion.li
                key={title}
                variants={cardVariant}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className="rounded-md text-center md:text-left bg-white p-5 shadow-sm"
              >
                <motion.span
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="grid h-8 w-8 mx-auto md:ml-0 place-items-center rounded-full bg-forest text-sm font-semibold text-white"
                >
                  {index + 1}
                </motion.span>

                <h3 className="mt-3 font-sans text-sm font-semibold">
                  {title}
                </h3>

                <p className="mt-1 text-xs text-ink/65">{description}</p>
              </motion.li>
            ))}
          </motion.ol>
        </Section>
      </div>

      {/* Membership Application - currently commented out */}
      {/*
      <Section>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
          id="apply"
          className="mx-auto max-w-3xl scroll-mt-24 rounded-md border border-black/10 p-6 md:p-8"
        >
          <h2 className="text-center text-2xl font-semibold">
            Membership Application
          </h2>

          <p className="mb-6 mt-1 text-center text-xs text-ink/60">
            Fields marked * are required. The Secretariat will contact you
            after your application is reviewed.
          </p>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              role="status"
              className="py-10 text-center"
            >
              <CheckCircle2 className="mx-auto text-forest" size={40} />
              <p className="mt-3 font-semibold text-forest">
                Application received
              </p>
              <p className="mt-1 text-sm text-ink/65">
                We will contact you by email once it has been reviewed.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={submit}
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid gap-4 md:grid-cols-2"
            >
              <motion.div variants={cardVariant}>
                <Label req>Full Name</Label>
                <input required className={field} placeholder="Enter your full name" />
              </motion.div>

              <motion.div variants={cardVariant}>
                <Label>Title</Label>
                <input className={field} placeholder="e.g. Baale of ..." />
              </motion.div>

              <motion.div variants={cardVariant}>
                <Label req>Email Address</Label>
                <input required type="email" className={field} placeholder="Enter your email address" />
              </motion.div>

              <motion.div variants={cardVariant}>
                <Label req>Phone Number</Label>
                <input required className={field} placeholder="Enter your phone number" />
              </motion.div>

              <motion.div variants={cardVariant}>
                <Label req>State</Label>
                <select required className={field} defaultValue="">
                  <option value="" disabled>Select your state</option>
                  {states.map((state) => (
                    <option key={state}>{state}</option>
                  ))}
                </select>
              </motion.div>

              <motion.div variants={cardVariant}>
                <Label req>Local Government Area</Label>
                <input required className={field} placeholder="Enter your LGA" />
              </motion.div>

              <motion.div variants={cardVariant} className="md:col-span-2">
                <Label req>Community / Village</Label>
                <input required className={field} placeholder="Name of the community you lead" />
              </motion.div>

              <motion.div variants={cardVariant} className="md:col-span-2">
                <Label>Why do you want to join?</Label>
                <textarea rows={4} className={field} placeholder="Tell us briefly about your community and goals..." />
              </motion.div>

              <motion.label
                variants={cardVariant}
                className="flex items-start gap-2 text-xs text-ink/70 md:col-span-2"
              >
                <input required type="checkbox" className="mt-0.5 accent-forest" />
                I confirm the information above is accurate and I agree to the
                Forum's terms.
              </motion.label>

              <motion.div variants={cardVariant} className="text-center md:col-span-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded bg-forest px-8 py-3 text-sm font-semibold text-white hover:bg-forest-dark"
                >
                  <Send size={15} />
                  Submit Application
                </motion.button>
              </motion.div>
            </motion.form>
          )}
        </motion.div>
      </Section>
      */}
    </>
  );
}








// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Users, ShieldCheck, Megaphone, BookOpen, Send, CheckCircle2 } from "lucide-react";
// import { Section, H2 } from "../components/ui.jsx";
// import mountain from '../../public/images/mountain.png'
// import president from '../../public/images/president.png'
// import Members from "../components/membership/Members.jsx";


// const states = ["Lagos", "Ogun", "Oyo", "Osun", "Ondo", "Ekiti"];
// const benefits = [
//   [Users, "A Network of Leaders", "Connect with Baales across all six South-West states and share what works."],
//   [Megaphone, "A Stronger Voice", "Raise community needs directly with government and development agencies."],
//   [ShieldCheck, "Security Liaison", "Take part in coordinated peace and community security efforts."],
//   [BookOpen, "Training & Events", "Attend forums, workshops and cultural programmes throughout the year."],
// ];
// const steps = [
//   ["Submit your application", "click the link below and provide your details and community."],
//   ["Verification", "The state chairperson confirms your standing as a Baale."],
//   ["Approval", "The Executive Committee reviews and approves your membership."],
//   ["Welcome", "You receive your membership details and the next forum calendar."],
// ];
// const field = "w-full rounded border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-forest focus:ring-1 focus:ring-forest";
// const Label = ({ children, req }) => <label className="mb-1.5 block text-xs font-medium">{children}{req && <span className="text-red-600"> *</span>}</label>;

// export default function Membership() {
//   const [sent, setSent] = useState(false);
//   const submit = (e) => { e.preventDefault(); setSent(true); /* TODO: POST form data to your API */ };
// const handleDownload = () => {
//     const link = document.createElement("a");

//     link.href = "/documents/CIT335-1.pdf";
//     link.download = "constitution.pdf";

//     link.click();
//   };

//   const handleRegister = ()=>{
//     window.location.href = 'https://docs.google.com/forms/d/1PYY8dWTcAehBXnIDF08K5qnW87R6jXoYVVgEVOSf8aE'
//   }
//   return (
//     <>
//       {/* Hero */}

//        {/* <button onClick={handleDownload}>
//       Download Constitution
//     </button> */}
      // <section className="relative overflow-hidden text-center md:text-left bg-forest-dark text-white">
      //   <img src={mountain} alt="" className="absolute inset-0 h-full w-full object-cover" />
      //   <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest-dark/40 to-transparent" />
      //   <div className="relative mx-auto grid grid-cols-1 max-w-6xl items-end gap-4 px-6 pt-14 md:grid-cols-[1.2fr_1.2fr] md:pt-20">
      //     <div className="pb-14 md:pb-20 mt-8 md:mt-0">
      //       <h1 className="text-5xl font-semibold md:text-6xl">Become a Member</h1>
      //       <p className="mt-3 text-xs hidden md:block text-white/70"><Link to="/">Home</Link> <span className="mx-1">›</span> <span className="text-gold">Membership</span></p>
      //       <p className="mt-6 md:max-w-md font-serif text-lg text-white/90">Join traditional community leaders across the South-West in building safer, more prosperous communities.</p>
      //       <button onClick={handleRegister} className="mt-8 inline-flex mr-5 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-forest-dark transition-colors hover:bg-gold-dark hover:text-white">Apply Now</button>
      //       <button onClick={handleRegister} className="mt-8 cursor-pointer inline-flex rounded-md border-2 bg-transparent  border-gold px-6 py-3 text-sm font-semibold text-white forest-dark transition-colors hover:bg-gold-dark hover:text-white">Register</button>
      //     </div>
      //     <img src={president} alt="Portrait of the President" className="row-start-1 md:col-2 rounded-lg h-[400px] md:h-[520px] w-auto " />
      //   </div>
      // </section>

//       <Members/>

//       {/* Benefits */}
//       <Section>
//         <H2 center sub="What you gain as a member of the Forum.">Why Join the Forum</H2>
//         <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
//           {benefits.map(([Icon, t, d]) => (
//             <div key={t} className="rounded-md border border-black/10 p-5 text-center">
//               <Icon className="mx-auto text-gold" size={30} />
//               <h3 className="mt-3 font-sans text-sm font-semibold text-forest">{t}</h3>
//               <p className="mt-1 text-xs text-ink/65">{d}</p>
//             </div>
//           ))}
//         </div>
//       </Section>

//       {/* Steps */}
//       <div className="bg-cream/70">
//         <Section>
//           <H2 center sub="From application to membership in four steps.">How Membership Works</H2>
//           <ol className="grid gap-4 md:grid-cols-4">
//             {steps.map(([t, d], i) => (
//               <li key={t} className="rounded-md bg-white p-5">
//                 <span className="grid h-8 w-8 place-items-center rounded-full bg-forest text-sm font-semibold text-white">{i + 1}</span>
//                 <h3 className="mt-3 font-sans text-sm font-semibold">{t}</h3>
//                 <p className="mt-1 text-xs text-ink/65">{d}</p>
//               </li>
//             ))}
//           </ol>
//         </Section>
//       </div>

//       {/* <Section>
//         <div id="apply" className="mx-auto max-w-3xl scroll-mt-24 rounded-md border border-black/10 p-6 md:p-8">
//           <h2 className="text-center text-2xl font-semibold">Membership Application</h2>
//           <p className="mb-6 mt-1 text-center text-xs text-ink/60">Fields marked * are required. The Secretariat will contact you after your application is reviewed.</p>
//           {sent ? (
//             <div role="status" className="py-10 text-center">
//               <CheckCircle2 className="mx-auto text-forest" size={40} />
//               <p className="mt-3 font-semibold text-forest">Application received</p>
//               <p className="mt-1 text-sm text-ink/65">We will contact you by email once it has been reviewed.</p>
//             </div>
//           ) : (
//             <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
//               <div><Label req>Full Name</Label><input required className={field} placeholder="Enter your full name" /></div>
//               <div><Label>Title</Label><input className={field} placeholder="e.g. Baale of ..." /></div>
//               <div><Label req>Email Address</Label><input required type="email" className={field} placeholder="Enter your email address" /></div>
//               <div><Label req>Phone Number</Label><input required className={field} placeholder="Enter your phone number" /></div>
//               <div><Label req>State</Label>
//                 <select required className={field} defaultValue=""><option value="" disabled>Select your state</option>{states.map((s) => <option key={s}>{s}</option>)}</select></div>
//               <div><Label req>Local Government Area</Label><input required className={field} placeholder="Enter your LGA" /></div>
//               <div className="md:col-span-2"><Label req>Community / Village</Label><input required className={field} placeholder="Name of the community you lead" /></div>
//               <div className="md:col-span-2"><Label>Why do you want to join?</Label><textarea rows={4} className={field} placeholder="Tell us briefly about your community and goals..." /></div>
//               <label className="flex items-start gap-2 text-xs text-ink/70 md:col-span-2"><input required type="checkbox" className="mt-0.5 accent-forest" />I confirm the information above is accurate and I agree to the Forum's terms.</label>
//               <div className="text-center md:col-span-2">
//                 <button className="inline-flex items-center gap-2 rounded bg-forest px-8 py-3 text-sm font-semibold text-white hover:bg-forest-dark"><Send size={15} />Submit Application</button>
//               </div>
//             </form>
//           )}
//         </div>
//       </Section> */}
//     </>
//   );
// }
