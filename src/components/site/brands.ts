export type Brand = {
  name: string;
  tagline: string;
  description: string;
  category: string;
  launched: string;
  reach: string;
};

export const brands: Brand[] = [
  {
    name: "HiYo",
    tagline: "Say hi to the world around you.",
    description:
      "Our flagship location-based social app. HiYo helps people discover neighbors, classmates and kindred spirits through interest-based feeds, voice rooms and live streaming.",
    category: "Social discovery",
    launched: "2011",
    reach: "800M+ registered users",
  },
  {
    name: "Sparkle",
    tagline: "A smarter way to match.",
    description:
      "Sparkle uses on-device intelligence to suggest meaningful matches based on shared values, lifestyle and intent — not just photos.",
    category: "Dating",
    launched: "2014",
    reach: "350M+ registered users",
  },
  {
    name: "Crossed",
    tagline: "Reconnect with the people you pass by.",
    description:
      "Crossed quietly logs the people you walk past throughout the day, so you can reach out to the ones you wish you'd said hello to.",
    category: "Proximity dating",
    launched: "2018",
    reach: "110M+ registered users",
  },
  {
    name: "BrewMatch",
    tagline: "Thoughtful dating, one cup at a time.",
    description:
      "BrewMatch curates a small number of high-quality introductions every day — designed for people who want relationships, not endless swiping.",
    category: "Curated dating",
    launched: "2021",
    reach: "40M+ registered users",
  },
  {
    name: "Aria Live",
    tagline: "The stage in your pocket.",
    description:
      "Aria Live is our live streaming and voice chatroom platform, where creators host concerts, talk shows and late-night hangouts for global audiences.",
    category: "Live entertainment",
    launched: "2016",
    reach: "100K+ streaming hours daily",
  },
  {
    name: "Pebble",
    tagline: "Tiny conversations, real friendships.",
    description:
      "Pebble is our Gen-Z focused interest community app — built around short voice notes, drop-in rooms and creator-led micro communities.",
    category: "Community",
    launched: "2023",
    reach: "25M+ registered users",
  },
];