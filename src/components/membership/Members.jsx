
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, ChevronDown, ChevronUp } from "lucide-react";

import president from "../../../public/images/president_2.jpeg";
import seyi from "../../../public/images/convener.jpeg";
import rashidi from "../../../public/images/rashidi.jpeg";
import hakeem from "../../../public/images/hakeem.jpeg";
import abu from "../../../public/images/abu.jpeg";
import bashiru from "../../../public/images/bashiru.jpeg";
import segun from "../../../public/images/segun.jpeg";
import tajudeen from "../../../public/images/tajudeen.jpeg";
import bukola from "../../../public/images/bukola.jpeg";

const members = [
  {
    id: 1,
    name: "His Excellency Bola Ahmed Tinubu GCFR",
    position: "President, Federal Republic of Nigeria",
    state: "Ogun State",
    picture: president,
  },
  {
    id: 2,
    name: "Chief (Dr) Seyi Bamigbade",
    position: "Convener",
    state: "Lagos State",
    picture: seyi,
  },
  {
    id: 3,
    name: "Oba Rashidi Adewolu Ladoja of Olubadan Ibadanland.",
    position: "host Southwest Nigeria Baales Forum",
    state: "Oyo State",
    picture: rashidi,
  },
  {
    id: 4,
    name: "Chief Hakeem Abayomi Adedoyin Rabiu",
    position: "Chairman, Southwest Nigeria Baales Forum",
    state: "Osun State",
    picture: hakeem,
  },
  {
    id: 5,
    name: "Chief Abu Jelili Ododo The Oba Elect of Ijeododo Kingdom.",
    position: "Chairman, Lagos State Baales Forum",
    state: "Ogun State",
    picture: abu,
  },
  {
    id: 6,
    name: "Alhaji Bashiru Atilola Adisa Baale Kiabi Ido local government",
    position: "Chairman, Oyo State Baales Forum",
    state: "Ekiti State",
    picture: bashiru,
  },
  {
    id: 7,
    name: "Chief, (Engr) Olusegun Taiwo Elemile, the Elemile of Upo",
    position: "Chairman, Ondo State Baales Forum",
    state: "Ondo State",
    picture: segun,
  },
  {
    id: 8,
    name: "Prince Tajudeen Oluyole Olusi OON",
    position: "Chairman Board of Trustees, Southwest Nigeria Baales Forum",
    state: "Osun State",
    picture: tajudeen,
  },
  {
    id: 9,
    name: "Baale Egbedoyin Bukola Olaoye",
    position: "Baale Mokuro/Okeora Ile Ife",
    state: "Lagos State",
    picture: bukola,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.95,
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
  exit: {
    opacity: 0,
    y: 15,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export default function Members() {
  const [showAll, setShowAll] = useState(false);

  const displayedMembers = showAll ? members : members.slice(0, 8);

  return (
    <section
      id="members"
      className="overflow-hidden bg-[#F7F7F5] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4 flex justify-center"
          >
            <div className="rounded-full bg-[#E8F5F0] p-3">
              <Users size={30} className="text-[#C6922E]" />
            </div>
          </motion.div>

          <h2 className="font-serif text-3xl font-bold text-[#10452F] sm:text-4xl">
            Our Distinguished Members
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Meet the traditional leaders united in preserving our cultural
            heritage and advancing communities across South-West Nigeria.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 h-1 rounded-full bg-[#C6922E]"
          />
        </motion.div>

        {/* Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedMembers.map((member) => (
              <motion.article
                key={member.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="group rounded-xl border border-gray-200 bg-white p-6 text-center transition-colors duration-300 hover:border-[#C6922E] hover:shadow-lg"
              >
                {/* Member Picture */}
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.3 }}
                  className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border-4 border-[#E8F5F0] bg-gray-100 shadow-sm"
                >
                  <motion.img
                    src={member.picture}
                    alt={member.name}
                    loading="lazy"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full object-cover object-top"
                  />
                </motion.div>

                {/* Member Details */}
                <h3 className="font-serif text-lg font-semibold leading-5 text-[#10452F]">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm font-medium leading-5 text-[#C6922E]">
                  {member.position}
                </p>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All / Show Less */}
        {members.length > 8 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center"
          >
            <motion.button
              type="button"
              onClick={() => setShowAll((previous) => !previous)}
              aria-expanded={showAll}
              aria-controls="members"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#10452F] px-7 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#0B3524] focus:outline-none focus:ring-2 focus:ring-[#C6922E] focus:ring-offset-2"
            >
              {showAll ? "Show Less" : "View All Members"}

              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {showAll ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </motion.span>
            </motion.button>

            <motion.p
              key={displayedMembers.length}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-sm text-gray-500"
            >
              Showing {displayedMembers.length} of {members.length} members
            </motion.p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
