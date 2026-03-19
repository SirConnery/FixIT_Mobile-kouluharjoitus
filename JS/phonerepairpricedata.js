const phoneRepairPriceData = {
  Apple: {
    "iPhone 12": [199, 249, 129, 99, 79],
    "iPhone 13": [179, 229, 119, 89, 69],
    "iPhone 14": [159, 209, 109, 79, 59],
  },
  Samsung: {
    "Galaxy S22": [189, 239, 119, 99, 79],
    "Galaxy S23": [169, 219, 109, 89, 69],
    "Galaxy A52": [129, 179, 89, 69, 49],
  },
  Microsoft: {
    "Surface Duo": [199, 249, 129, 99, 79],
    "Surface Duo 2": [179, 229, 119, 89, 69],
    "Lumia 950": [159, 209, 109, 79, 59],
  },
};

const repairTypes = [
  {
    name: "Screen Repair",
    description: "Repair cracked or malfunctioning screens",
    img: "https://placehold.co/150x150",
  },
  {
    name: "Screen Change",
    description: "Replace the screen completely with a new one",
    img: "https://placehold.co/150x150",
  },
  {
    name: "Battery Change",
    description: "Swap out old or faulty batteries quickly",
    img: "https://placehold.co/150x150",
  },
  {
    name: "Port Repairs",
    description: "Fix charging or headphone ports",
    img: "https://placehold.co/150x150",
  },
  {
    name: "Speaker Repair",
    description: "Restore audio quality or replace broken speakers",
    img: "https://placehold.co/150x150",
  },
];
