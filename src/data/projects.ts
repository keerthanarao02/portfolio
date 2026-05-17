export interface ProjectMedia {
  type: "video" | "gif";
  url: string;
  caption?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  ogImage?: string;
  tags: string[];
  featuredTags: string[];
  demoUrl?: string;
  codeUrl?: string;
  media?: ProjectMedia;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "android-malware-detection",
    title: "Android Malware Detection",
    description:
      "A machine learning and Flutter-based application for detecting malware in Android applications.",
    longDescription:
      "An advanced malware detection system for Android applications utilizing deep learning algorithms to statically analyze application features and permissions. It includes a frontend interface and Explainable AI (XAI) capabilities for transparency.",
    image: "/images/portfolio/android_malware.png",
    tags: ["Deep Learning", "CyberSecurity", "Machine Learning"],
    featuredTags: ["Deep Learning", "CyberSecurity"],
    codeUrl: "https://github.com/keerthanarao02/Android_Malware_Detection",
  },
  {
    id: 2,
    slug: "image-steganography",
    title: "Image Steganography",
    description:
      "Securely hide and extract secret messages within images using steganography.",
    longDescription:
      "This project implements image steganography to encode hidden payloads inside image data and decode them securely. It focuses on intuitive UX for non-technical users to securely communicate without raising suspicion.",
    image: "/images/portfolio/imageStegnography.png",
    tags: ["TypeScript", "Steganography", "CyberSecurity"],
    featuredTags: ["TypeScript", "CyberSecurity"],
    codeUrl: "https://github.com/keerthanarao02/Image-Stegnography",
  },
  {
    id: 3,
    slug: "multi-disease-prediction",
    title: "Multi-Disease Prediction System",
    description:
      "Developing an ML-based system for accurate multi-disease prediction using medical data.",
    longDescription:
      "Developing an ML-based system for accurate multi-disease prediction using machine learning algorithms and medical data. The system analyzes symptoms and test results to proactively detect potential health risks.",
    image: "/images/portfolio/multi_disease.png",
    tags: ["Machine Learning", "Data Science", "Python"],
    featuredTags: ["Machine Learning", "Python"],
    codeUrl: "https://github.com/keerthanarao02/multi-disease-prediction-for-tomorrow-s-world",
  },
  {
    id: 4,
    slug: "predictive-maintenance-aircraft",
    title: "Predictive Maintenance of Aircraft Engine",
    description:
      "Predicting aircraft engine failure using machine learning models to reduce downtime.",
    longDescription:
      "A machine learning pipeline designed to analyze aircraft engine sensor data and predict remaining useful life (RUL). By forecasting engine failures, it helps schedule timely maintenance and prevent catastrophic failures.",
    image: "/images/portfolio/aircraft_maintenance.png",
    tags: ["Machine Learning", "Predictive Analytics", "Data Science"],
    featuredTags: ["Machine Learning", "Data Science"],
    codeUrl: "https://github.com/keerthanarao02/Predictive-Maintenance-of-air-craft-engine-failure",
  },
  {
    id: 5,
    slug: "network-intrusion-detection",
    title: "Network Intrusion Detection System",
    description:
      "A machine learning-based system to detect and classify network intrusions and cyberattacks in real time.",
    longDescription:
      "A comprehensive network intrusion detection system (NIDS) that uses machine learning models to classify network traffic and identify malicious activity. Trained on standard benchmark datasets, it detects common attack categories such as DoS, probing, R2L, and U2R. The system focuses on high detection accuracy and low false-positive rates for practical security deployment.",
    image: "/images/portfolio/network_intrusion.png",
    tags: ["CyberSecurity", "Machine Learning", "Network Security", "Python"],
    featuredTags: ["CyberSecurity", "Network Security"],
    codeUrl: "https://github.com/keerthanarao02/Network-Intrusion-Detection-System",
  },
  {
    id: 6,
    slug: "rice-leaf-disease-detection",
    title: "Rice Leaf Disease Detection",
    description:
      "A CNN-based model to detect rice leaf diseases from plant images using deep learning.",
    longDescription:
      "Convolutional network trained on curated plant pathology images to classify common rice leaf conditions. Includes preprocessing (resize, normalize), evaluation metrics, and notes on data imbalance and augmentation.",
    image: "/images/portfolio/riceLeafDetection.png",
    tags: ["Deep Learning", "Machine Learning", "CNN"],
    featuredTags: ["Deep Learning", "CNN"],
    codeUrl:
      "https://github.com/keerthanarao02/Rice-leaf-disease-dtection-using-customized-CNN-model-and-transferl-learning-models-",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectFilterOptions(): string[] {
  const tags = new Set<string>();
  PROJECTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return ["All", ...[...tags].sort((a, b) => a.localeCompare(b))];
}
