import bigImg1 from "@/assets/tab-1.png";
import smallImg1 from "@/assets/tab-2.png";
import bigImg2 from "@/assets/tab-2.png";
import smallImg2 from "@/assets/tab-1.png";
import bgGrid from "@/assets/graph2.png";

import icon1 from "@/assets/icon/Meraki 1.png";
import icon2 from "@/assets/icon/Meraki 2.png";
import icon3 from "@/assets/icon/Meraki 3.png";
import icon4 from "@/assets/icon/Meraki 4.png";
// Tabs list
export const tabs = ["Meraki", "Art", "Music", "Expressions"];

// Main content per tab
export const tabContent = {
  Meraki: {
    title: "Meraki",
    sub: "Creative Expression",
    heading: " BEYOND CLASSROOM",
    description: `Any education is not complete without taking cognisance of what is the need of the hour. Designed to complement the academic curriculum, beyond classroom widens horizons, maximises learner’s participation and potential, thus leading to increased learning and enhanced cognitive development. Recognising the need for this, the following domains provide that and more: social opportunities and opening a child’s mind to new interests.`,
    highlights: [
      { label: "Meraki (Creative Expressions)", icon: icon1 },
      { label: "Eat Your School Gardens", icon: icon2 },
      { label: "Responsible Citizenship Programme", icon: icon3 },
      { label: "Publishing", icon: icon4 },
    ],
    images: [
      { big: bigImg1, small: smallImg1 },
      { big: bigImg2, small: smallImg2 },
    ],
  },
  Art: {
    title: "Art",
    sub: "Discover Your 'Self'",
    heading: "Co-Curricular Programs ",
    description:
      "Co-curricular programmes are disciplines that align with and mirror our academic programme. These structured disciplines are CAIE approved and bear credits.",
    highlights: [
      { label: "ART", icon: icon1 },
      { label: "MUSIC", icon: icon2 },
      { label: "SPORTS", icon: icon3 },
      { label: "DMAC", icon: icon4 },
    ],
    images: [{ big: bigImg1, small: smallImg1 }],
  },
  Music: {
    title: "Music",
    sub: "Hear Your Scound",
    heading: "Co-Curricular Programs  ",
    description:
      "Co-curricular programmes are disciplines that align with and mirror our academic programme. These structured disciplines are CAIE approved and bear credits.",
    highlights: [
      { label: "ART", icon: icon1 },
      { label: "MUSIC", icon: icon2 },
      { label: "SPORTS", icon: icon3 },
      { label: "DMAC", icon: icon4 },
    ],

    images: [{ big: bigImg1, small: smallImg1 }],
  },
  Expressions: {
    title: "Expressions",
    sub: "Impress Through Expressions",
    heading: " EXPRESSIONS CLUBS",
    description: `‘Expressions’ are a collection of clubs that provide opportunities for students to engage in curricular activities outside the classroom – Music, Environment, Technology, Dance, Theatre, Debating and Public Speaking amongst other things. Students go on field trips, interact with professionals from different fields and participate in organizing various events to complete the experience.`,
    highlights: [
      { label: "Cookery Club", icon: icon1 },
      { label: "Debate Club", icon: icon2 },
      { label: "Theatre Club", icon: icon3 },
      { label: "Math Club", icon: icon4 },
      { label: "Organic Farming Club", icon: icon1 },
      { label: "Creative Movement Club", icon: icon2 },
      { label: "Financial Literacy Club", icon: icon3 },
      { label: "Public Speaking Club", icon: icon4 },
      { label: "MUN Club", icon: icon1 },
      { label: "Creative Expressions Club", icon: icon2 },
      { label: "Music Club", icon: icon3 },
    ],
    images: [{ big: bigImg1, small: smallImg1 }],
  },
};
