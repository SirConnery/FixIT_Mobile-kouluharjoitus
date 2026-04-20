
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
    name: "Näytön korjaus",
    description: "Korjataan halkeillut tai toimimattomat näytöt",
    img: "/Img/icons/screen_repair.webp",
  },
  {
    name: "Näytön vaihto",
    description: "Näytön täydellinen vaihto uuteen",
    img: "/Img/icons/screen_change.webp",
  },
  {
    name: "Akun vaihto",
    description: "Vanhan tai viallisen akun nopea vaihto",
    img: "/Img/icons/battery.webp",
  },
  {
    name: "Liitäntäkorjaukset",
    description: "Lataus- ja kuulokeliitäntöjen korjaus",
    img: "/Img/icons/port_repairs.webp",
  },
  {
    name: "Kaiuttimen korjaus",
    description: "Äänenlaadun palautus tai rikkoutuneen kaiuttimen vaihto",
    img: "/Img/icons/speaker_repair.webp",
  },
];
