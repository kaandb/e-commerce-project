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

export const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
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
    title: "VITA CLASSIC",
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