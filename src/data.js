import slide1 from './assets/headerslide1.jpg'; 
import slide2 from './assets/headerslide2.jpg';
import ep1 from './assets/editorspick1.jpg'; 
import ep2 from './assets/editorspick2.jpg'; 
import ep3 from './assets/editorspick3.jpg'; 
import ep4 from './assets/editorspick4.jpg';
import bestseller1 from "./assets/bestseller1.jpg";
import bestseller2 from "./assets/bestseller2.jpg";
import bestseller3 from "./assets/bestseller3.jpg";
import bestseller4 from "./assets/bestseller4.jpg";
import bestseller5 from "./assets/bestseller5.jpg";
import bestseller6 from "./assets/bestseller6.jpg";
import bestseller7 from "./assets/bestseller7.jpg";
import bestseller8 from "./assets/bestseller8.jpg";
import carousel2 from "./assets/carousel2.png";
import neural1 from "./assets/neural1.png";
import featured1 from "./assets/featured1.jpg";
import featured2 from "./assets/featured2.jpg";
import featured3 from "./assets/featured3.jpg";
import cloth1 from "./assets/cloth1.jpg";
import cloth2 from "./assets/cloth2.jpg";
import cloth3 from "./assets/cloth3.jpg";
import cloth4 from "./assets/cloth4.jpg";
import cloth5 from "./assets/cloth5.jpg";
import hooli from "./assets/brands/hooli.svg";
import lyft from "./assets/brands/lyft.svg";
import piedPiper from "./assets/brands/pied-piper.svg";
import stripe from "./assets/brands/stripe.svg";
import aws from "./assets/brands/aws.svg";
import reddit from "./assets/brands/reddit.svg";
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import team1 from './assets/team1.jpg';
import team2 from './assets/team2.jpg';
import team3 from './assets/team3.jpg';
import aboutus1 from './assets/aboutus1.png';
import aboutus2 from './assets/aboutus2.png';
import aboutus3 from './assets/aboutus3.png';

export const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
    { path: "/team", label: "Team" },
    { path: "/pages", label: "Pages" },
];

export const mobileMenuLinks = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Product" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
];

export const headerContact = {
    phone: "(225) 555-0118",
    email: "michelle.rivera@example.com",
    promoText: "Follow Us and get a chance to win 80% off"
};

export const sliderItems = [
  {
    image: slide1, 
    subtitle: "SUMMER 2020",
    title: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
    buttonText: "SHOP NOW"
  },
  {
    image: slide2, 
    subtitle: "WINTER 2020",
    title: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
    buttonText: "SHOP NOW"
  }
];

export const editorsPickItems = [
    { image: ep1, title: "MEN", link: "/shop/men" },
    { image: ep2, title: "WOMEN", link: "/shop/women" },
    { image: ep3, title: "ACCESSORIES", link: "/shop/accessories" },
    { image: ep4, title: "KIDS", link: "/shop/kids" },
];

export const bestsellerProducts = [
  {
    id: 1,
    image: bestseller1,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 2,
    image: bestseller2,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 3,
    image: bestseller3,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 4,
    image: bestseller4,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 5,
    image: bestseller5,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 6,
    image: bestseller6,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 7,
    image: bestseller7,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 8,
    image: bestseller8,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
];

export const classicProductItems = [
  {
    image: carousel2,
    subtitle: "SUMMER 2020",
    title: "Vita Classic Product",
    description: "We know how large objects will act, We know how are objects will act, We know",
    price: "$16.48",
    buttonText: "ADD TO CART",
  },
  {
    image: carousel2,
    subtitle: "WINTER 2020",
    title: "Vita Classic Product",
    description: "We know how large objects will act, We know how are objects will act, We know",
    price: "$16.48",
    buttonText: "ADD TO CART",
  }
];

export const neuralUniverseData = {
  image: neural1,
  subtitle: "SUMMER 2020",
  title: "Part of the Neural Universe",
  description: "We know how large objects will act, but things on a small scale.",
  buttonText1: "BUY NOW",
  buttonText2: "READ MORE",
};

export const featuredPosts = [
  {
    id: 1,
    image: featured1,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    link: "#"
  },
  {
    id: 2,
    image: featured2,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    link: "#"
  },
  {
    id: 3,
    image: featured3,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    link: "#"
  },
];

export const shopCategories = [
  { id: 1, image: cloth1, title: "CLOTHS", items: 5 },
  { id: 2, image: cloth2, title: "CLOTHS", items: 5 },
  { id: 3, image: cloth3, title: "CLOTHS", items: 5 },
  { id: 4, image: cloth4, title: "CLOTHS", items: 5 },
  { id: 5, image: cloth5, title: "CLOTHS", items: 5 },
];

export const shopProducts = [
  ...bestsellerProducts, 
  { id: 9, image: ep1, title: "Graphic Design", department: "English Department", originalPrice: "$16.48", salePrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { id: 10, image: ep2, title: "Graphic Design", department: "English Department", originalPrice: "$16.48", salePrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { id: 11, image: ep3, title: "Graphic Design", department: "English Department", originalPrice: "$16.48", salePrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { id: 12, image: ep4, title: "Graphic Design", department: "English Department", originalPrice: "$16.48", salePrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
];

export const brandLogos = [
  { id: 1, image: hooli, alt: "Hooli" },
  { id: 2, image: lyft, alt: "Lyft" },
  { id: 3, image: piedPiper, alt: "Pied Piper" },
  { id: 4, image: stripe, alt: "Stripe" },
  { id: 5, image: aws, alt: "AWS" },
  { id: 6, image: reddit, alt: "Reddit" },
];

export const singleProduct = {
  id: 1,
  title: "Floating Phone",
  rating: 4.5,
  reviews: 10,
  price: "$1,139.33",
  availability: "In Stock",
  description: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
  images: [ep1, ep2], 
};

export const productDescription = {
    image: ep3, 
    textContent: `Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
    
    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
    
    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.`,
    listTitle: "the quick fox jumps over",
    listItems: [
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog"
    ]
};

export const contactPageData = {
  title: "Get answers to all your questions.",
  description: "Problems trying to resolve the conflict between the two major realms of Classical physics:",
  buttonText: "CONTACT OUR COMPANY",
  socials: [
    { icon: Twitter, url: "#" },
    { icon: Facebook, url: "#" },
    { icon: Instagram, url: "#" },
    { icon: Linkedin, url: "#" },
  ],
};

export const teamData = [
  {
    id: 1,
    image: team1,
    username: "Username",
    profession: "Profession",
    socials: [
      { icon: Facebook, url: "#" },
      { icon: Instagram, url: "#" },
      { icon: Twitter, url: "#" },
    ]
  },
  {
    id: 2,
    image: team2,
    username: "Username",
    profession: "Profession",
    socials: [
      { icon: Facebook, url: "#" },
      { icon: Instagram, url: "#" },
      { icon: Twitter, url: "#" },
    ]
  },
  {
    id: 3,
    image: team3,
    username: "Username",
    profession: "Profession",
    socials: [
      { icon: Facebook, url: "#" },
      { icon: Instagram, url: "#" },
      { icon: Twitter, url: "#" },
    ]
  },
];

export const aboutUsData = {
  hero: {
    title: "ABOUT COMPANY",
    headline: "ABOUT US",
    description: "We know how large objects will act, but things on a small scale",
    buttonText: "Get Quote Now",
    image: aboutus1
  },
  stats: [
    { number: "15K", text: "Happy Customers" },
    { number: "150K", text: "Monthly Visitors" },
    { number: "15", text: "Countries Worldwide" },
    { number: "100+", text: "Top Partners" },
  ],
  video: {
    image: aboutus2,
  },
  workWithUs: {
    title: "WORK WITH US",
    headline: "Now Let's grow Yours",
    description: "The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th",
    buttonText: "Button",
    image: aboutus3
  }
};