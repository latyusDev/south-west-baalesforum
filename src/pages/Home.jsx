import {
  Users,
  ShieldCheck,
  Sprout,
  Landmark,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { motion } from "motion/react";
import { Button, Section, H2 } from "../components/ui.jsx";
import bukola from '../../public/images/bukola.jpeg'
import segun from '../../public/images/segun.jpeg'
import bashiru from '../../public/images/bashiru.jpeg'
import abu from '../../public/images/abu.jpeg'


import hero from "../../public/images/hero.jpeg";
import united from "../../public/images/united.jpeg";
import unity from "../../public/images/unity.jpg";
import peace from "../../public/images/peace.jpg";
import growth from "../../public/images/growth.jpg";
import heritage from "../../public/images/heritage.jpg";
import tinubu from "../../public/images/news/p_news.png";
import tinubu2 from "../../public/images/news/p2_news.jpg";
import tinubu3 from "../../public/images/news/p3_news.jpg";
import resolution from "../../public/images/resolution.jpeg";
import stake from "../../public/images/stake.jpeg";
import ogun from "../../public/images/ogun-t.jpg";
import southwest from "../../public/images/southwest.jpeg";

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

const stats = [
  [Landmark, "6", "South-Western States"],
  [Users, "Hundreds", "Community Leaders"],
  [ShieldCheck, "Stronger", "Safer Communities"],
  [Sprout, "Sustainable", "Development"],
];

const mission = [
  [unity, "Unity", "Stronger traditional leadership network"],
  [peace, "Peace", "Conflict resolution in communities"],
  [growth, "Development", "Improved infrastructure and social amenities"],
  [heritage, "Heritage", "Preserving our rich cultural values"],
];

const news = [
  {
    id:1,
    title:'2027: South-West Traditional Rulers Set To Present Reelection Blueprint For Tinubu, Shettima',
    tag:'South-West Traditional Rulers',
    date: 'October 23, 2026s',
    image:tinubu,
    link:"https://www.google.com/url?opi=89978449&q=https://independent.ng/2027-south-west-traditional-rulers-set-to-present-reelection-blueprint-for-tinubu-shettima/&sa=U&ved=2ahUKEwi00vby0OeXAxWMZ0EAHVwzAAUQxfQBKAB6BAgMEAE&usg=AOvVaw221bGaW8pTd9OYz_w3u6hs"
  },
  {
    id:2,
    title:'Southwest traditional rulers plan Tinubu’s 2027 re-election blueprint',
    tag:'South-West Traditional Rulers',
    date: '22nd October, 2026',
    image:tinubu2,
    link:'https://www.google.com/url?opi=89978449&q=https://pmnewsnigeria.com/2026/10/22/southwest-traditional-rulers-plan-tinubus-2027-re-election-blueprint/&sa=U&ved=2ahUKEwi00vby0OeXAxWMZ0EAHVwzAAUQxfQBKAB6BAgLEAE&usg=AOvVaw1mNp5FpkUOFoGwKfLRotC_'
    
  },
  {
    id:3,
    title:'Baales, Mogajis in Ibadan back Tinubu for President',
    tag:'Baales, Mogajis in Ibadan',
    date: 'November 6, 2022 11:55 AM',
    image:tinubu3,
    link:'https://www.google.com/url?opi=89978449&q=https://pmnewsnigeria.com/2026/10/22/southwest-traditional-rulers-plan-tinubus-2027-re-election-blueprint/&sa=U&ved=2ahUKEwi00vby0OeXAxWMZ0EAHVwzAAUQxfQBKAB6BAgLEAE&usg=AOvVaw1mNp5FpkUOFoGwKfLRotC_'
    
  },
  // [
  //   "Leadership Update",
  //   "Ganiyu Hamzat Appointed Co-Chairman of South-West Baales Forum BoT",
  //   "Mar 15, 2024",
  //   hamzat,
  // ],
  // [
  //   "Engagement",
  //   "Forum Strengthens Ties with South-West Development Commission",
  //   "Mar 10, 2024",
  //   resolution,
  // ],
  // [
  //   "Communiqué",
  //   "Resolutions from Regional Stakeholders' Meeting",
  //   "Mar 5, 2024",
  //   stake,
  // ],
];

const states = [
  { name: "Lagos", imageUrl: abu },
  { name: "Ogun", imageUrl: ogun },
  { name: "Oyo", imageUrl: bashiru },
  { name: "Osun", imageUrl: bukola },
  { name: "Ondo", imageUrl: segun },
  { name: "Ekiti", imageUrl: ogun },
];

export default function Home() {

  const handleNews = (link)=>{
    window.location.href = link
  }
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-forest text-white">
        <motion.img
          src={hero}
          alt="South-West Baales traditional leaders"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-16 md:pt-24">
          <motion.h1
            className="max-w-xl text-2xl text-center md:text-left font-bold leading-tight md:text-4xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            The Voice of South-West Baales. Preserving Heritage, Advancing
            Community
          </motion.h1>

          <motion.p
            className="mt-5 max-w-md text-center md:text-left text-sm text-white/85"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Uniting traditional community leaders across the South-West to
            promote peace, grassroots development, and cultural preservation.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-3 mx-auto w-max md:mx-0 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button to="/about">Learn More</Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button to="/about" variant="outline">
                Our Mission
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-14 grid grid-cols-2 gap-6 border-t border-white/15 pt-6 md:grid-cols-4"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {stats.map(([Icon, big, small]) => (
              <motion.div
                key={small}
                variants={cardVariant}
                className="flex items-center gap-3 border-r border-gray-400 py-3 last:border-r-0"
              >
                <Icon className="text-gold" size={40} />
                <div>
                  <p className="font-semibold">{big}</p>
                  <p className="text-[11px] text-white/70">{small}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <Section className="grid items-center gap-8 md:grid-cols-[1fr_1.4fr] overflow-hidden">
        <motion.img
          src={united}
          alt="Community leaders"
          className="h-64 w-full rounded-md object-cover"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
          className="text-center  md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-forest">
            Welcome to the
            <br />
            South-West Baales Forum
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            A united voice for traditional village and community chiefs
            (Baales) across Lagos, Ogun, Oyo, Osun, Ondo and Ekiti States. We
            serve as the primary link between government and communities,
            fostering peace, development and cultural preservation in our
            communities.
          </p>

          <motion.div
            className="mt-5 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button to="/about" variant="green">
              Read Full Message <ArrowRight size={14} />
            </Button>
          </motion.div>
        </motion.div>
      </Section>

      <section>
        <div className="max-w-[900px] mx-auto py-24">
                <img src={southwest} className="w-full h-[400px] mx-auto block" alt="" />
            
        </div>
      </section>

       {/* Six South-Western States */}
      <Section className="overflow-hidden">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
        >
          <H2
            center
            sub="Our Forum unites traditional leaders across the six states in the South-West region."
          >
            The Six South-Western States
          </H2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 lg:grid-cols-6 gap-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {states.map((state) => (
            <motion.div
              key={state.name}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              className="text-center "
            >
              {/* <div className="overflow-hidden rounded">
                <motion.img
                  src={state.imageUrl}
                  alt={`${state.name} state`}
                  className="h-24 w-full object-cover object-[top]"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                />

                
              </div> */}
                <div className="hiddden md:block mx-auto mb-5 md:h-30 w-56 h-56  md:w-40 overflow-hidden rounded-sm  bg-gray-100 shadow-sm">
                <img
                  src={state.imageUrl}
                  alt={state.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                
              </div>

               {/* <img
                  src={state.imageUrl}
                  alt={state.name}
                  loading="lazy"
                  className="h-[150px] w-full rounded-md object-cover object-top-right transition-transform duration-300 group-hover:scale-105"
                /> */}

              <h3 className="mt-2 text-md font-bold">{state.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Mission Section */}
      <div className="mx-auto max-w-6xl px-6 overflow-hidden">
        <motion.div
          className="rounded-lg bg-cream/60 px-6 py-10 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
        >
          <motion.h2 className="text-3xl font-bold" variants={fadeUp}>
            Our Mission
          </motion.h2>

          <motion.p
            className="mx-auto mt-2 max-w-xl text-sm text-ink/70"
            variants={fadeUp}
          >
            To unite traditional community leaders across South-West Nigeria,
            fostering peace, grassroots development, and cultural preservation.
          </motion.p>

          <motion.div
            className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {mission.map(([image, title, description]) => (
              <motion.div
                key={title}
                variants={cardVariant}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="rounded-md border border-black/5 bg-white p-3 md:p-5"
              >
                <motion.img
                  src={image}
                  alt=""
                  className="mx-auto size-[70px] object-contain"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                />

                <h3 className="mt-3 text-sm md:text-base font-bold text-forest">
                  {title}
                </h3>

                <p className="mt-1 text-xs text-ink/65">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Latest News */}
      <Section className="overflow-hidden">
        <motion.div
          id="news"
          className="mb-6 flex items-end justify-between gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
        >
          <h2 className="text-3xl font-semibold text-forest">
            Latest News &amp; Updates
          </h2>

          {/* <motion.a
            href="#news"
            className="flex shrink-0 items-center gap-1 text-xs"
            whileHover={{ x: 4 }}
          >
            View All News <ArrowRight size={12} />
          </motion.a> */}
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {news.map((newsItem) => (
            <motion.article
              key={newsItem.title}
              variants={cardVariant}
              whileHover={{
                y: -7,
                transition: { duration: 0.25 },
              }}
              className="overflow-hidden rounded-md border border-black/5 shadow-sm"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="h-60 w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <div className="p-4">
                <span className="rounded bg-gold px-2 py-0.5 text-[10px] font-medium text-white">
                  {newsItem.tag}
                </span>

                <h3 className="mt-3 font-sans text-lg font-bold leading-snug">
                  {newsItem.title}
                </h3>

               <div className="flex items-center justify-between mt-4" >
                   <p className=" flex items-center gap-1.5 text-[11px] text-ink/55">
                  <Calendar size={12} />
                  {newsItem.date}
                </p>

                <button onClick={()=>handleNews(newsItem.link)} className="group cursor-pointer inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-ink hover:shadow-md">
              Learn More
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
               </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>

     

      {/* Join Section */}
      <div id="join" className="mx-auto mb-10 max-w-6xl px-6 overflow-hidden">
        <motion.div
          className="flex flex-col items-center justify-between gap-4 rounded-lg bg-forest px-8 py-6 text-white md:flex-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollView}
          whileHover={{ scale: 1.01 }}
        >
          <div>
            <h2 className="text-2xl font-semibold">
              Together for Stronger Communities
            </h2>

            <p className="mt-1 text-xs text-white/75">
              Join us in building a more peaceful, prosperous and united
              South-West.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Button to="/contact">Become a Member</Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}