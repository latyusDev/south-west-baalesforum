import { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  TriangleAlert,
  Handshake,
  MessageSquare,
} from "lucide-react";
import { PageHero, Section } from "../components/ui.jsx";

const field =
  "w-full rounded border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-forest focus:ring-1 focus:ring-forest";

const Label = ({ children, req }) => (
  <label className="mb-1.5 block text-xs font-medium">
    {children}
    {req && <span className="text-red-600"> *</span>}
  </label>
);

const Circle = ({ Icon }) => (
  <motion.span
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ duration: 0.2 }}
    className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-white"
  >
    <Icon size={22} />
  </motion.span>
);

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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const scrollView = {
  once: false,
  amount: 0.2,
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", phone: "", subject:"", message: "" });
    const phoneNumber = '+2348162046944'
      const handleChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
      const message = ` Chief (Dr) Seyi Bamigbade Convener,

USER DETAILS

*Name*: ${form.name}
*Email*: ${form.email}
*Phone*: ${form.phone}
*Subject*: ${form.subject}
*Message*: ${form.message}

`;

   

    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

        window.open(link, "_blank");
        setForm({...form, message: "" })
        setSent(true);
      };


  return (
    <>
      {/* Hero */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <PageHero
          title="Contact Us"
          crumb="Contact Us"
          img="contact-hero.jpg"
          text="Get in touch with the South-West Baales Forum Secretariat. We are here to serve our communities."
        />
      </motion.div>

      <Section className="overflow-hidden">
        {/* Contact Information */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
          className="grid gap-4 md:grid-cols-2"
        >
          {/* Address */}
          <motion.div
            variants={fadeLeft}
            whileHover={{ y: -5 }}
            className="flex gap-4 rounded-md border border-black/10 p-6"
          >
            <Circle Icon={MapPin} />

            <div className="text-sm">
              <h3 className="mb-2 font-semibold text-forest">
                Secretariat Address
              </h3>
              61 Ijaola Street
              <br />
              Maryland
              <br />
              Lagos State, Nigeria
            </div>
          </motion.div>

          {/* Phone and Email */}
          <motion.div
            variants={fadeRight}
            whileHover={{ y: -5 }}
            className="rounded-md border border-black/10 p-6 text-sm"
          >
            <div className="flex gap-4">
              <Circle Icon={Phone} />

              <div>
                <h3 className="mb-2 font-semibold text-forest">
                  General Enquiries
                </h3>
                +234 816 204 6944
                <br />
                +234 816 204 6944
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <Circle Icon={Mail} />

              <div className="pt-1">
                info@swbaalesforum.org
                <br />
                support@swbaalesforum.org
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
          className="mt-8 rounded-md border border-black/10 p-6 md:p-8"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center text-2xl font-semibold"
          >
            Send Us a Message
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-6 mt-1 text-center text-xs text-ink/60"
          >
            Use the form below to send us your enquiries, feedback or
            partnership proposals. We will get back to you as soon as possible.
          </motion.p>

          <motion.div
            variants={stagger}
            className="grid gap-4 md:grid-cols-2"
          >
            <motion.div variants={cardVariant}>
              <Label req>Full Name</Label>
              <input
                required
                name="name"
                 value={form.name}
                onChange={handleChange}
                autoComplete="name"
                className={field}
                placeholder="Enter your full name"
              />
            </motion.div>

            <motion.div variants={cardVariant}>
              <Label req>Email Address</Label>
              <input
                required
                name="email"
                type="email"
                 value={form.email}
                onChange={handleChange}
                autoComplete="email"
                className={field}
                placeholder="Enter your email address"
              />
            </motion.div>

            <motion.div variants={cardVariant}>
              <Label>Phone Number</Label>
              <input
                name="phone"
                type="tel"
                 value={form.phone}
                  onChange={handleChange}
                autoComplete="tel"
                className={field}
                placeholder="Enter your phone number"
              />
            </motion.div>

            <motion.div variants={cardVariant}>
              <Label req>Subject</Label>
              <select
                required
                name="subject"
                 value={form.subject}
                  onChange={handleChange}
                className={field}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option>Community issue</option>
                <option>Partnership</option>
                <option>General enquiry</option>
                <option>Other</option>
              </select>
            </motion.div>

            <motion.div
              variants={cardVariant}
              className="md:col-span-2"
            >
              <Label req>Message</Label>
              <textarea
                required
                name="message"
                rows={4}
                 value={form.message}
                  onChange={handleChange}
                className={field}
                placeholder="Write your message here..."
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-6 text-center"
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded bg-forest px-8 py-3 text-sm font-semibold text-white hover:bg-forest-dark"
            >
              <Send size={15} />
              Send Message
            </motion.button>

            {sent && (
              <motion.p
                role="status"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-sm text-forest"
              >
                Message sent. We will reply as soon as possible.
              </motion.p>
            )}
          </motion.div>
        </motion.form>

        {/* Enquiry Categories */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
          className="mt-6 grid gap-4 md:grid-cols-3"
        >
          {[
            [
              TriangleAlert,
              "Report a Community Issue",
              "Report urgent grassroots issues in your community.",
            ],
            [
              Handshake,
              "Suggest a Partnership",
              "Propose development partnerships or collaborations.",
            ],
            [
              MessageSquare,
              "General Enquiry",
              "Any other questions or information you need.",
            ],
          ].map(([Icon, title, description]) => (
            <motion.div
              key={title}
              variants={cardVariant}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-md border border-black/10 p-4 text-center"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Icon
                  className="mx-auto text-red-700"
                  size={45}
                />
              </motion.div>

              <h3 className="mt-2 font-sans text-sm font-semibold">
                {title}
              </h3>

              <p className="mt-1 text-xs text-ink/60">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Maps */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
          whileHover={{ scale: 1.005 }}
          className="mt-6 overflow-hidden rounded-md border border-black/10"
        >
          <iframe
            title="South-West Baales Forum Secretariat location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6149409259083!2d3.3627757999999996!3d6.570186499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92744a6d8ef5%3A0x557dcc11795bafc4!2s61%20Ijaola%20St%2C%20Ilupeju%2C%20Lagos%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1792619308488!5m2!1sen!2sng"
            width="600"
            height="450"
            className="h-96 w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </motion.div>
      </Section>
    </>
  );
}
// import { useState } from "react";
// import { MapPin, Phone, Mail, Send, TriangleAlert, Handshake, MessageSquare } from "lucide-react";
// import { PageHero, Section } from "../components/ui.jsx";

// const field = "w-full rounded border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-forest focus:ring-1 focus:ring-forest";
// const Label = ({ children, req }) => <label className="mb-1.5 block text-xs font-medium">{children}{req && <span className="text-red-600"> *</span>}</label>;
// const Circle = ({ Icon }) => <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-white"><Icon size={22} /></span>;

// export default function Contact() {
//   const [sent, setSent] = useState(false);
//   const submit = (e) => { e.preventDefault(); setSent(true); /* TODO: POST form data to your API */ };
//   return (
//     <>
//       <PageHero title="Contact Us" crumb="Contact Us" img="contact-hero.jpg" text="Get in touch with the South-West Baales Forum Secretariat. We are here to serve our communities." />
//       <Section>
//         <div className="grid gap-4 md:grid-cols-2">
//           <div className="flex gap-4 rounded-md border border-black/10 p-6"><Circle Icon={MapPin} /><div className="text-sm"><h3 className="mb-2 font-semibold text-forest">Secretariat Address</h3>61 Ijaola Street<br />Maryland<br />Lagos State, Nigeria</div></div>
//           <div className="rounded-md border border-black/10 p-6 text-sm">
//             <div className="flex gap-4"><Circle Icon={Phone} /><div><h3 className="mb-2 font-semibold text-forest">General Enquiries</h3>+234 803 123 4567<br />+234 809 987 6543</div></div>
//             <div className="mt-4 flex gap-4"><Circle Icon={Mail} /><div className="pt-1">info@swbaalesforum.org<br />support@swbaalesforum.org</div></div>
//           </div>
//         </div>

//         <form onSubmit={submit} className="mt-8 rounded-md border border-black/10 p-6 md:p-8">
//           <h2 className="text-center text-2xl font-semibold">Send Us a Message</h2>
//           <p className="mb-6 mt-1 text-center text-xs text-ink/60">Use the form below to send us your enquiries, feedback or partnership proposals. We will get back to you as soon as possible.</p>
//           <div className="grid gap-4 md:grid-cols-2">
//             <div><Label req>Full Name</Label><input required className={field} placeholder="Enter your full name" /></div>
//             <div><Label req>Email Address</Label><input required type="email" className={field} placeholder="Enter your email address" /></div>
//             <div><Label>Phone Number</Label><input className={field} placeholder="Enter your phone number" /></div>
//             <div><Label req>Subject</Label><select required className={field} defaultValue=""><option value="" disabled>Select a subject</option><option>Community issue</option><option>Partnership</option><option>General enquiry</option></select></div>
//             <div className="md:col-span-2"><Label req>Message</Label><textarea required rows={4} className={field} placeholder="Write your message here..." /></div>
//           </div>
//           <div className="mt-6 text-center">
//             <button className="inline-flex items-center gap-2 rounded bg-forest px-8 py-3 text-sm font-semibold text-white hover:bg-forest-dark"><Send size={15} />Send Message</button>
//             {sent && <p role="status" className="mt-3 text-sm text-forest">Message sent. We will reply as soon as possible.</p>}
//           </div>
//         </form>

//         <div className="mt-6 grid gap-4 md:grid-cols-3">
//           {[[TriangleAlert, "Report a Community Issue", "Report urgent grassroots issues in your community."], [Handshake, "Suggest a Partnership", "Propose development partnerships or collaborations."], [MessageSquare, "General Enquiry", "Any other questions or information you need."]].map(([Icon, t, d]) => (
//             <div key={t} className="rounded-md border border-black/10 p-4 text-center"><Icon className="mx-auto text-red-700" size={45} /><h3 className="mt-2 font-sans text-sm font-semibold">{t}</h3><p className="mt-1 text-xs text-ink/60">{d}</p></div>
//           ))}
//         </div>

//         <div className="mt-6 overflow-hidden rounded-md border border-black/10">
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6149409259083!2d3.3627757999999996!3d6.570186499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92744a6d8ef5%3A0x557dcc11795bafc4!2s61%20Ijaola%20St%2C%20Ilupeju%2C%20Lagos%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1792619308488!5m2!1sen!2sng" width="600" className="h-96 w-full" height="450" style={{border:0}} loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
//         </div>
//       </Section>
//     </>
//   );
// }
