"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaJava, FaChartLine, FaCode, FaShieldAlt, FaNetworkWired, FaTools } from "react-icons/fa";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiFigma,
  SiPython,
  SiC,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiGooglecolab,
  SiGithub,
  SiPostgresql,
  SiSplunk,
  SiWireshark,
  SiAnsible,
  SiDatabricks,
  SiKeras,
  SiPytorch,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

interface Props {
  skillName: string;
  index: number;
}

const iconMap: Record<string, { icon: IconType; color: string }> = {
  // Frontend
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  ReactJS: { icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF" },

  // Backend
  Python: { icon: SiPython, color: "#3776AB" },
  Java: { icon: FaJava, color: "#007396" },
  C: { icon: SiC, color: "#A8B9CC" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#000000" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  SQL: { icon: SiPostgresql, color: "#4169E1" },
  Tensorflow: { icon: SiTensorflow, color: "#FF6F00" },
  Langchain: { icon: SiPython, color: "#3776AB" },

  // Developer Tools
  "VS Code": { icon: FaCode, color: "#007ACC" },
  "Google Colab": { icon: SiGooglecolab, color: "#F9AB00" },
  "Jupyter Notebook": { icon: SiJupyter, color: "#F37626" },
  Matlab: { icon: SiPython, color: "#0076A8" },
  GitHub: { icon: SiGithub, color: "#181717" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Figma: { icon: SiFigma, color: "#F24E1E" },

  // Data Analysis
  Pandas: { icon: SiPandas, color: "#150458" },
  Numpy: { icon: SiNumpy, color: "#013243" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  Matplotlib: { icon: FaChartLine, color: "#11557C" },
  Statsmodels: { icon: SiPython, color: "#3776AB" },

  // Newly added skills
  Splunk: { icon: SiSplunk, color: "#000000" },
  "Signal Sciences": { icon: FaShieldAlt, color: "#0055FF" },
  Tenable: { icon: FaShieldAlt, color: "#0055FF" },
  CyberArk: { icon: FaShieldAlt, color: "#000000" },
  Wireshark: { icon: SiWireshark, color: "#165997" },
  Nmap: { icon: FaNetworkWired, color: "#000000" },
  Autopsy: { icon: FaTools, color: "#61DAFB" },
  NetworkMiner: { icon: FaNetworkWired, color: "#0055FF" },
  DumpIt: { icon: FaTools, color: "#339933" },
  DiskDrill: { icon: FaTools, color: "#3776AB" },
  ExifTool: { icon: FaTools, color: "#F7931E" },
  Ansible: { icon: SiAnsible, color: "#EE0000" },
  "Microsoft Azure": { icon: VscAzure, color: "#0089D6" },
  Databricks: { icon: SiDatabricks, color: "#FF3621" },
  NumPy: { icon: SiNumpy, color: "#013243" },
  TensorFlow: { icon: SiTensorflow, color: "#FF6F00" },
  Keras: { icon: SiKeras, color: "#D00000" },
  PyTorch: { icon: SiPytorch, color: "#EE4C2C" },
  "Scikit-Learn": { icon: SiScikitlearn, color: "#F7931E" },
  "OSI & TCP/IP stacks": { icon: FaNetworkWired, color: "#3178C6" },
  Ethernet: { icon: FaNetworkWired, color: "#3178C6" },
  OSPF: { icon: FaNetworkWired, color: "#3178C6" },
  RIP: { icon: FaNetworkWired, color: "#3178C6" },
  ARP: { icon: FaNetworkWired, color: "#3178C6" },
  DHCP: { icon: FaNetworkWired, color: "#3178C6" },
  ICMP: { icon: FaNetworkWired, color: "#3178C6" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Git: { icon: SiGithub, color: "#181717" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  "CI/CD": { icon: FaTools, color: "#3776AB" },
};

const TechnologiesProvider = ({ skillName, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme,
  );

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.2;
  const Icon = iconMap[skillName]?.icon || SiReact;
  const color = iconMap[skillName]?.color || "#61DAFB";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className={`group flex flex-col gap-2 items-center p-2 rounded-lg transition-all duration-300 ${
        isDarkMode ? "hover:bg-dark-50" : "hover:bg-white"
      }`}
    >
      <div className="w-16 h-16 flex items-center justify-center">
        <Icon size={48} style={{ color }} />
      </div>
      <p
        className={`text-sm font-medium text-center max-w-24 ${
          isDarkMode ? "text-gray-300" : "text-gray-900"
        }`}
      >
        {skillName}
      </p>
    </motion.div>
  );
};

export default TechnologiesProvider;
