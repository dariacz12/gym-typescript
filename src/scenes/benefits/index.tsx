import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Stateof the Art Facilities",
    description:
      "Build and Deploy a Complete Typescript Fitness Application tutorial. For frontend, we will be using React, Typescript, Vite, Tailwind, Hero Icons, Framer Motion, Form Submit, React Anchor Link Smooth Scroll. We will also be using Cloudflare Pages for deploying our app.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Build and Deploy a Complete Typescript Fitness Application tutorial. For frontend, we will be using React, Typescript, Vite, Tailwind, Hero Icons, Framer Motion, Form Submit, React Anchor Link Smooth Scroll. We will also be using Cloudflare Pages for deploying our app.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Build and Deploy a Complete Typescript Fitness Application tutorial. For frontend, we will be using React, Typescript, Vite, Tailwind, Hero Icons, Framer Motion, Form Submit, React Anchor Link Smooth Scroll. We will also be using Cloudflare Pages for deploying our app.",
  },
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 xs:my-48 sm:my-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/*HEADER */}
        <motion.div
          className="md:w-3/5 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: -0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            Build and Deploy a Complete Typescript Fitness Application tutorial.
            For frontend, we will be using React, Typescript, Vite, Tailwind,
            Hero Icons, Framer Motion, Form Submit, React Anchor Link Smooth
            Scroll. We will also be using Cloudflare Pages for deploying our
            app.
          </p>
        </motion.div>
        {/*BENEFITS*/}
        <motion.div
          className="item-center mt-5 justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/*GRAFICS AND DESCRIPTION*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/*GRAFIC*/}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          {/*DESCRIPTION*/}
          <div>
            {/*TITLE*/}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: -0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/*DESCRIPT*/}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ dalay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: -0 },
              }}
            >
              <p className="my-5">
                Build and Deploy a Complete Typescript Fitness Application
                tutorial. For frontend, we will be using React, Typescript,
                Vite, Tailwind, Hero Icons, Framer Motion, Form Submit, React
                Anchor Link Smooth Scroll. We will also be using Cloudflare
                Pages for deploying our app.
              </p>
              <p className="mb-5">
                Build and Deploy a Complete Typescript Fitness Application
                tutorial. For frontend, we will be using React, Typescript,
                Vite, Tailwind, Hero Icons, Framer Motion, Form Submit, React
                Anchor Link Smooth Scroll. We will also be using Cloudflare
                Pages for deploying our app.
              </p>
            </motion.div>
            {/*BUTTON*/}
            <div className="relative mt-16">
              <div className="before:absolute before:-right-20 before:-top-20 before:z-[1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
