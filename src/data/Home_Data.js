import bigImg1 from "@/assets/tab-1.png";
import smallImg1 from "@/assets/tab-2.png";
import bigImg2 from "@/assets/tab-2.png";
import smallImg2 from "@/assets/tab-1.png";
import bgGrid from "@/assets/graph2.png";

import Meraki_1 from "@/assets/icon/Meraki 1.png";
import Meraki_2 from "@/assets/icon/Meraki 2.png";
import Meraki_3 from "@/assets/icon/Meraki 3.png";
import Meraki_4 from "@/assets/icon/Meraki 4.png";
import Art_1 from "@/assets/icon/Art 1.png";
import Art_2 from "@/assets/icon/Art 2.png";
import Art_3 from "@/assets/icon/Art 3.png";
import Art_4 from "@/assets/icon/Art 4.png";
import Ex_1 from "@/assets/icon/Ex 1.png";
import Ex_2 from "@/assets/icon/Ex 2.png";
import Ex_3 from "@/assets/icon/Ex 3.png";
import Ex_4 from "@/assets/icon/Ex 4.png";
import Ex_5 from "@/assets/icon/Ex 5.png";
import Ex_6 from "@/assets/icon/Ex 6.png";
import Ex_7 from "@/assets/icon/Ex 7.png";
import Ex_8 from "@/assets/icon/Ex 8.png";
import Ex_9 from "@/assets/icon/Ex 9.png";
import Ex_10 from "@/assets/icon/Ex 10.png";
import Ex_11 from "@/assets/icon/Ex 11.png";
// import Art_4 from "@/assets/icon/Art 4.png";
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
      { label: "Meraki (Creative Expressions)", icon: Meraki_1 },
      { label: "Eat Your School Gardens", icon: Meraki_2 },
      { label: "Responsible Citizenship Programme", icon: Meraki_3 },
      { label: "Publishing", icon: Meraki_4 },
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
      { label: "ART", icon: Art_1 },
      { label: "MUSIC", icon: Art_2 },
      { label: "SPORTS", icon: Art_3 },
      { label: "DMAC", icon: Art_4 },
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
      { label: "ART", icon: Art_1 },
      { label: "MUSIC", icon: Art_2 },
      { label: "SPORTS", icon: Art_3 },
      { label: "DMAC", icon: Art_4 },
    ],

    images: [{ big: bigImg1, small: smallImg1 }],
  },
  Expressions: {
    title: "Expressions",
    sub: "Impress Through Expressions",
    heading: " EXPRESSIONS CLUBS",
    description: `‘Expressions’ are a collection of clubs that provide opportunities for students to engage in curricular activities outside the classroom – Music, Environment, Technology, Dance, Theatre, Debating and Public Speaking amongst other things. Students go on field trips, interact with professionals from different fields and participate in organizing various events to complete the experience.`,
    highlights: [
      { label: "Cookery Club", icon: Ex_1 },
      { label: "Debate Club", icon: Ex_2 },
      { label: "Theatre Club", icon: Ex_3 },
      { label: "Math Club", icon: Ex_4 },
      { label: "Organic Farming Club", icon: Ex_5 },
      { label: "Creative Movement Club", icon: Ex_6 },
      { label: "Financial Literacy Club", icon: Ex_7 },
      { label: "Public Speaking Club", icon: Ex_8 },
      { label: "MUN Club", icon: Ex_9 },
      { label: "Creative Expressions Club", icon: Ex_10 },
      { label: "Music Club", icon: Ex_11 },
    ],
    images: [{ big: bigImg1, small: smallImg1 }],
  },
};
