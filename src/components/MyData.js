import p1 from './images/pricing/p-1.png'
import p2 from './images/pricing/p-2.png'
import p4 from './images/pricing/p-4.png'
import p5 from './images/pricing/p-5.png'
import p6 from './images/pricing/p-6.png'
import p7 from './images/pricing/p-7.png'
import c1 from './images/location/city-1.png';
import c2 from './images/location/city-2.png';
import c3 from './images/location/city-3.png';
import c4 from './images/location/city-4.png';
import c5 from './images/location/city-5.png';
import c6 from './images/location/city-6.png';
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiTrophy } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaRegGrinHearts } from "react-icons/fa";
//team
import t1 from './images/team/team-1.jpg';
import t2 from './images/team/team-2.jpg';
import t3 from './images/team/team-3.jpg';
import t4 from './images/team/team-4.jpg';
import t5 from './images/team/team-5.jpg';

export const list = [
    {
      id: 1,
      cover: p1,
      name: "Red Carpet Real Estate",
      location: "210 Zirak Road, Canada",
      category: "For Rent",
      price: "$3,700",
      type: "Apartment",
    },
    {
      id: 2,
      cover: p2,
      name: "Fairmount Properties",
      location: "5698 Zirak Road, NewYork",
      category: "For Sale",
      price: "$9,750",
      type: "Condos",
    },
    {
      id: 3,
      cover: p4,
      name: "The Real Estate Corner",
      location: "5624 Mooker Market, USA",
      category: "For Rent",
      price: "$5,860",
      type: "Offices",
    },
    {
      id: 4,
      cover: p5,
      name: "Herringbone Realty",
      location: "5621 Liverpool, London",
      category: "For Sale",
      price: "$7,540",
      type: "Homes & Villas",
    },
    {
      id: 5,
      cover:p6,
      name: "Brick Lane Realty",
      location: "210 Montreal Road, Canada",
      category: "For Rent",
      price: "$4,850",
      type: "Commercial",
    },
    {
      id: 6,
      cover:p7,
      name: "Banyon Tree Realty",
      location: "210 Zirak Road, Canada",
      category: "For Sale",
      price: "$2,742",
      type: "Apartment",
    },
  ]
  export const awards = [
    {
      icon: <i><CiTrophy/></i>,
      num: "32 M	",
      name: "Blue Burmin Award",
    },
    {
      icon: <i><FaBriefcase/></i>,
      num: "43 M",
      name: "Mimo X11 Award",
    },
    {
      icon: <i><FaLightbulb/></i>,
      num: "51 M",
      name: "Australian UGC Award",
    },
    {
      icon: <i><FaRegGrinHearts/></i>,
      num: "42 M",
      name: "IITCA Green Award",
    },
  ]
  export const location = [
    {
      id: 1,
      name: "New Orleans, Louisiana",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: c1,
    },
    {
      id: 2,
      name: "Jerrsy, United State",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: c2,
    },
    {
      id: 3,
      name: "Liverpool, London",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: c3,
    },
    {
      id: 4,
      name: "NewYork, United States",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: c4,
    },
    {
      id: 5,
      name: "Montreal, Canada",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: c5,
    },
    {
      id: 6,
      name: "California, USA",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover:c6,
    },
  ]
  export const team = [
    {
      list: "50",
      cover: t1,
      address: "Liverpool, Canada",
      name: "Sargam S. Singh",
      icon: [<i><FaFacebook/></i>, <i ><FaInstagram/></i>, <i><FaLinkedin/></i>, <i><FaTwitter/></i>]
    },
    {
      list: "70",
      cover:t2,
      address: "Montreal, Canada",
      name: "Harijeet M. Siller",
      icon: [<i><FaFacebook/></i>, <i ><FaInstagram/></i>, <i><FaLinkedin/></i>, <i><FaTwitter/></i>],  
    },
    {
      list: "80",
      cover: t3,
      address: "Denever, USA",
      name: "Anna K. Young",
      icon: [<i><FaFacebook/></i>, <i ><FaInstagram/></i>, <i><FaLinkedin/></i>, <i><FaTwitter/></i>],
    },
    {
      list: "51",
      cover: t4,
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [<i><FaFacebook/></i>, <i ><FaInstagram/></i>, <i><FaLinkedin/></i>, <i><FaTwitter/></i>],
    },
    {
      list: "42",
      cover: t5,
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [<i><FaFacebook/></i>, <i ><FaInstagram/></i>, <i><FaLinkedin/></i>, <i><FaTwitter/></i>],
    },
    {
      list: "50",
      cover: t1,
      address: "Liverpool, Canada",
      name: "Sargam S. Singh",
      icon: [<i><FaFacebook/></i>, <i ><FaInstagram/></i>, <i><FaLinkedin/></i>, <i><FaTwitter/></i>]
    },
    ]
  
  
  export const price = [
    {
      plan: "Basic",
      price: "29",
      ptext: "per user, per month",
      list: [
        {
          icon: <i><CiCircleCheck/></i>,
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: <i><CiCircleCheck/></i>,
          text: "120GB CDN Bandwidth",
        },
        {
          icon: <i><CiCircleCheck/></i>,
          text: "5GB Cloud Storage",
        },
        { change: "color", icon: <i ><IoIosCloseCircleOutline/></i>, text: "Personal Help Support" },
        { change: "color", icon: <i ><IoIosCloseCircleOutline/></i>, text: "Enterprise SLA" },
      ],
    },
    {
      best: "Best Value",
      plan: "Standard",
      price: "49",
      ptext: "per user, per month",
      list: [
        {
          icon: <i><CiCircleCheck/></i>,
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: <i><CiCircleCheck/></i>,
          text: "150GB CDN Bandwidth",
        },
        {
          icon: <i><CiCircleCheck/></i>,
          text: "10GB Cloud Storage",
        },
        {
          icon: <i><CiCircleCheck/></i>,
          text: "Personal Help Support",
        },
        {
          change: "color",
          icon: <i ><IoIosCloseCircleOutline/></i>,
          text: "Enterprise SLA",
        },
      ],
    },
    {
      plan: "Platinum",
      price: "79",
      ptext: "2 user, per month",
      list: [
        {
          icon: <i><CiCircleCheck/></i>,
          text: "100% Uptime Guarantee",
        },
        {
          icon: <i><CiCircleCheck/></i>,
          text: "200GB CDN Bandwidth",
        },
        {
          icon: <i><CiCircleCheck/></i>,
          text: "20GB Cloud Storage",
        },
        {
          icon: <i><CiCircleCheck/></i>,
          text: "Personal Help Support",
        },
        {
          icon: <i><CiCircleCheck/></i>,
          text: "Enterprise SLA",
        },
      ],
    },
  ]
  export const footer = [
    {
      title: "LAYOUTS",
      text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
    },
    {
      title: "ALL SECTIONS",
      text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
    },
    {
      title: "COMPANY",
      text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
    },
  ]