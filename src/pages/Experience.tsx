import { motion } from "framer-motion";
import { Code, Shield, Cloud, Brain, Network, Database } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

import TechnologiesProvider from "../components/ui/TechnologiesProvider";

type Category = "cyber_security" | "programming" | "cloud_devops" | "data_ai" | "networking" | "databases_tools";

// Categorize the skills
const skillCategories: Record<Category, string[]> = {
  cyber_security: [
    "Splunk",
    "Signal Sciences",
    "Tenable",
    "CyberArk",
    "Wireshark",
    "Nmap",
    "Autopsy",
    "NetworkMiner",
    "DumpIt",
    "DiskDrill",
    "ExifTool",
  ],
  programming: [
    "Python",
    "Java",
    "C",
    "HTML",
  ],
  cloud_devops: [
    "Ansible",
    "Microsoft Azure",
    "CI/CD",
  ],
  data_ai: [
    "Databricks",
    "NumPy",
    "Pandas",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "Scikit-Learn",
  ],
  networking: [
    "OSI & TCP/IP stacks",
    "Ethernet",
    "OSPF",
    "RIP",
    "ARP",
    "DHCP",
    "ICMP",
  ],
  databases_tools: [
    "MySQL",
    "MongoDB",
    "postgresql",
    "Postman",
  ],
};

const Experience = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("cyber_security");
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme,
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="experience"
      className={`min-h-screen w-full pt-12 md:px-12 px-4 flex items-center justify-center max-sm:pt-12 ${isDarkMode ? "bg-black" : "bg-white"
        }`}
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left mb-4"
        >
          <p
            className={`text-4xl font-bold border-b-4 ${isDarkMode ? "border-white text-white" : "border-black text-black"
              } inline`}
          >
            Experience
          </p>
          <p
            className={`py-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Technologies I have worked with
          </p>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row gap-8"
        >
          {/* Left column - Category list */}
          <motion.div variants={itemVariants} className="w-full md:w-1/4">
            <div className="space-y-4">
              {[
                { id: "cyber_security", label: "Cyber Security", icon: Shield },
                { id: "programming", label: "Programming", icon: Code },
                { id: "cloud_devops", label: "Cloud & DevOps", icon: Cloud },
                { id: "data_ai", label: "Data & AI", icon: Brain },
                { id: "networking", label: "Networking", icon: Network },
                { id: "databases_tools", label: "Databases & Tools", icon: Database },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setSelectedCategory(id as Category)}
                  className={`w-full flex items-center gap-3 px-4 py-4 md:py-6 rounded-lg transition-all duration-300 ${selectedCategory === id
                      ? "bg-primary text-white"
                      : isDarkMode
                        ? "bg-dark-100 text-gray-300 hover:bg-dark-50"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                >
                  <Icon size={24} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right column - Technology icons */}
          <motion.div variants={itemVariants} className="w-full md:w-3/4">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-lg ${isDarkMode ? "bg-dark-100" : "bg-gray-200"
                }`}
            >
              <div className="flex flex-wrap gap-2 justify-start min-h-[300px]">
                {skillCategories[selectedCategory].map(
                  (skill: string, index: number) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <TechnologiesProvider skillName={skill} index={index} />
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
