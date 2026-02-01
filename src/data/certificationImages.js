// Images pour Cisco Networking Academy (galerie qui défile)
// Utilisé pour la galerie d'images interactive dans la section Certifications

export const ciscoImages = [
  "/images/certifications/cisco_network_fundamentals.png",
  "/images/certifications/cisco_network_support_security.png",
  "/images/certifications/cisco_data_science.png",
  "/images/certifications/cisco_modern_ai.png",
  "/images/certifications/cisco_linux_unhatched.png"
];

// Noms des certifications Cisco correspondant aux images
export const ciscoCertNames = [
  "Network Fundamentals",
  "Network Support & Security",
  "Introduction to Data Science",
  "Introduction to ModernAI",
  "Linux Unhatched"
];

// Fonction utilitaire pour récupérer les images Cisco
export const getCiscoImages = () => {
  return ciscoImages;
};

// Fonction utilitaire pour récupérer les noms des certifications Cisco
export const getCiscoCertNames = () => {
  return ciscoCertNames;
};
