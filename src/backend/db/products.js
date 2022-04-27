import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Solid Wood Jodhpur Sofa",
    manufacturer: "Furn-Easy",
    imageUrl: "https://cdn.shopify.com/s/files/1/0191/2234/products/sc_8152_jodhpur_720x.jpg?v=1589545494",
    category: "sofa",
    rating: 4,
    originalPrice: 48990,
    discountPrice: 41990
  },
  {
    _id: uuid(),
    name: "Solid Wood Eva Sofa",
    manufacturer: "Furn-Easy",
    imageUrl: "https://cdn.shopify.com/s/files/1/0191/2234/products/1_2048x_69cda9d2-bf9d-4106-9839-4d93dea06ca4_460x.jpg?v=1640094048",
    category: "sofa",
    rating: 3,
    originalPrice: 35990,
    discountPrice: 31590
  },
  {
    _id: uuid(),
    name: "Solid Wood Teffe Dining Set",
    manufacturer: "Furn-Easy",
    imageUrl: "https://cdn.shopify.com/s/files/1/0191/2234/products/DSC_2730_900x.jpg?v=1556093891",
    category: "dining",
    rating: 5,
    originalPrice: 29990,
    discountPrice: 24990
  },
  {
    _id: uuid(),
    name: "Solid Wood Leh Dining Set",
    manufacturer: "Furn-Easy",
    imageUrl: "https://cdn.shopify.com/s/files/1/0191/2234/products/DSC_1517_900x.jpg?v=1593618987",
    category: "dining",
    rating: 3,
    originalPrice: 34999,
    discountPrice: 29899
  },
  {
    _id: uuid(),
    name: "Solid Wood Eclipse Bed",
    manufacturer: "Furn-Easy",
    imageUrl: "https://cdn.shopify.com/s/files/1/0191/2234/products/LineaBedQueenSHS15_16x9_07b27e20-1d46-4d1b-8e04-56_1080x.jpg?v=1648805137",
    category: "bed",
    rating: 1,
    originalPrice: 38999,
    discountPrice: 28899
  },
  {
    _id: uuid(),
    name: "Solid Wood Kuber Bed",
    manufacturer: "Furn-Easy",
    imageUrl: "https://cdn.shopify.com/s/files/1/0191/2234/products/SCK-14k_900x.jpg?v=1563166993",
    category: "bed",
    rating: 2,
    originalPrice: 31990,
    discountPrice: 26999
  },
  {
    _id: uuid(),
    name: "Wood Cube Console Table",
    manufacturer: "Furn-Easy",
    imageUrl: "https://cdn.shopify.com/s/files/1/0191/2234/products/1304836537SC-1634_720x.jpeg?v=1529683245",
    category: "table",
    rating: 4,
    originalPrice: 11990,
    discountPrice: 9990
  },
  {
    _id: uuid(),
    name: "Double Shelf Console Table",
    manufacturer: "Furn-Easy",
    imageUrl: "https://cdn.shopify.com/s/files/1/0191/2234/products/SC-6137_460x.jpg?v=1529682420",
    category: "table",
    rating: 5,
    originalPrice: 15990,
    discountPrice: 13990
  },
];
