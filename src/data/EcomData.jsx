import benzbanner from '../assets/benz-banner.jpg'
import lexusbanner from '../assets/lexus-banner.jpg'
import toyotabanner from '../assets/toyota_banner.jpg'
import benz1 from "../assets/benz-1.jpeg"
import lexus1 from "../assets/Lexus.jpg"
import toyota1 from "../assets/toyota-1.jpg"
import honda1 from "../assets/Honda-1.jpg"
import lexus2 from "../assets/lexus-1.jpg"
import benz2 from "../assets/benz-2.jpg"
import honda2 from "../assets/Honda.jpg"
import toyota2 from "../assets/Toyota-3.jpg"




export const carousel = [
  {
    id: 1,
    img: benzbanner,
  },
  {
    id: 2,
    img: lexusbanner,
  },
  {
    id: 3,
    img: toyotabanner,
  },
]

export const products = [
  {
    id: 1,
    img:benz1,
    name: "Benz E500",
    price: "₦450",
    featured: true,
    topSelling: false
  },
  {
    id: 2,
    img:lexus1,
    name: "Lexus 470",
    price: "₦400",
    featured: true,
    topSelling: false
  },
  {
    id: 3,
    img:toyota1,
    name: "Toyota Camry",
    price: "₦320",
    featured: true,
    topSelling: false
  },
  {
    id: 4,
    img:honda1 ,
    name: "Honda Accord",
    price: "₦300",
    featured: true,
    topSelling: false
  },
  {
    id: 5,
    img:lexus2 ,
    name: "Lexus R350",
    price: "₦500",
    featured: false,
    topSelling: true
  },
  {
    id: 6,
    img:honda2 ,
    name: "Honda Oba",
    price: "₦600",
    featured: false,
    topSelling: true
  },
  {
    id: 7,
    img:benz2 ,
    name: "Benz 350",
    price: "₦500",
    featured: false,
    topSelling: true
  },
  {
    id: 8,
    img:toyota2 ,
    name: "Toyota runner",
    price: "₦320",
    featured: false,
    topSelling: true
  },

]