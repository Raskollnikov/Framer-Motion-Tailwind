import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";

const Services = () => {
  return (
    <section className="bg-[#f7f8fc]" id="services">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center space-y-5"
        >
          <h2 className="text-4xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h2>
          <p className="md:w-1/2 mx-auto">
            We offer a range of services to help you manage your mental health
            and wellness. Whether you are looking for a consultation, therapy,
            or just want to chat, we are here to help you.
          </p>
        </motion.div>

        {/* Service Categories */}
        <Tabs>
  <TabList className="flex flex-wrap justify-between items-center gap-4 md:gap-8 mt-4">
    <Tab>Couple Counseling</Tab>
    <Tab>Parenting Skills</Tab>
    <Tab>Feeling Stuck</Tab>
    <Tab>Self-Confidence</Tab>
  </TabList>

  <TabPanel>
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col md:flex-row gap-8 mt-8"
    >
      <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
        <h3 className="text-3xl font-semibold text-primary mb-4">
          Couple Counseling
        </h3>
        <p className="mb-8">
          Explore ways to strengthen your relationship through better communication and understanding.
        </p>
        <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
        <ul className="list-disc list-inside space-y-3">
          <li>Improve communication skills</li>
          <li>Strengthen relationships</li>
          <li>Enhance emotional connection</li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <img
          src={serviceImg1}
          className="w-full h-auto md:h-[446px] rounded-2xl object-cover"
          alt="Couple Counseling Service"
        />
      </div>
    </motion.div>
  </TabPanel>

  <TabPanel>
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col md:flex-row gap-8 mt-8"
    >
      <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
        <h3 className="text-3xl font-semibold text-primary mb-4">
          Parenting Skills
        </h3>
        <p className="mb-8">
          Learn effective techniques to improve your parenting skills and build stronger family bonds.
        </p>
        <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
        <ul className="list-disc list-inside space-y-3">
          <li>Strengthen parent-child relationships</li>
          <li>Promote healthy communication</li>
          <li>Encourage positive behavior</li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <img
          src={serviceImg2}
          className="w-full h-auto md:h-[446px] rounded-2xl object-cover"
          alt="Parenting Skills Service"
        />
      </div>
    </motion.div>
  </TabPanel>

  {/* Add TabPanel for "Feeling Stuck" */}
  <TabPanel>
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col md:flex-row gap-8 mt-8"
    >
      <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
        <h3 className="text-3xl font-semibold text-primary mb-4">
          Feeling Stuck
        </h3>
        <p className="mb-8">
          Discover strategies to break free from feelings of being stuck and regain control of your life.
        </p>
        <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
        <ul className="list-disc list-inside space-y-3">
          <li>Find clarity and direction</li>
          <li>Develop resilience</li>
          <li>Rebuild motivation and confidence</li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <img
          src={serviceImg3}
          className="w-full h-auto md:h-[446px] rounded-2xl object-cover"
          alt="Feeling Stuck Service"
        />
      </div>
    </motion.div>
  </TabPanel>

  {/* Add TabPanel for "Self-Confidence" */}
  <TabPanel>
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col md:flex-row gap-8 mt-8"
    >
      <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
        <h3 className="text-3xl font-semibold text-primary mb-4">
          Self-Confidence
        </h3>
        <p className="mb-8">
          Learn techniques to boost your self-esteem and become more confident in all areas of your life.
        </p>
        <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
        <ul className="list-disc list-inside space-y-3">
          <li>Improve self-image</li>
          <li>Enhance decision-making skills</li>
          <li>Build resilience to challenges</li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <img
          src={serviceImg4}
          className="w-full h-auto md:h-[446px] rounded-2xl object-cover"
          alt="Self-Confidence Service"
        />
      </div>
    </motion.div>
  </TabPanel>
</Tabs>

      </div>
    </section>
  );
};

export default Services;
