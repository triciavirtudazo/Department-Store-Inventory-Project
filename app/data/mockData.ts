import { Category, Product } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: "Women's Clothing",
    icon: "👗",
    route: "/categories/womens-clothing",
    totalItems: 0,
    lowStockItems: 0
  },
  {
    id: '2',
    name: "Men's Clothing",
    icon: "👔",
    route: "/categories/mens-clothing",
    totalItems: 0,
    lowStockItems: 0
  },
  {
    id: '3',
    name: "Electronics",
    icon: "📱",
    route: "/categories/electronics",
    totalItems: 0,
    lowStockItems: 0
  },
  {
    id: '4',
    name: "Home & Kitchen",
    icon: "🏠",
    route: "/categories/home-kitchen",
    totalItems: 0,
    lowStockItems: 0
  },
  {
    id: '5',
    name: "Beauty & Personal Care",
    icon: "💄",
    route: "/categories/beauty",
    totalItems: 0,
    lowStockItems: 0
  },
  {
    id: '6',
    name: "Toys & Games",
    icon: "🎮",
    route: "/categories/toys",
    totalItems: 0,
    lowStockItems: 0
  },
  {
    id: '7',
    name: "Jewelry & Accessories",
    icon: "💍",
    route: "/categories/jewelry",
    totalItems: 0,
    lowStockItems: 0
  },
  {
    id: '8',
    name: "Sports & Outdoors",
    icon: "⚽",
    route: "/categories/sports",
    totalItems: 0,
    lowStockItems: 0
  },
  {
    id: '9',
    name: "Fresh Produce",
    icon: "🥬",
    route: "/categories/fresh-produce",
    totalItems: 0,
    lowStockItems: 0
  },
  {
    id: '10',
    name: "Dairy & Eggs",
    icon: "🥚",
    route: "/categories/dairy-eggs",
    totalItems: 0,
    lowStockItems: 0
  },
  {
    id: '11',
    name: "Bakery",
    icon: "🥖",
    route: "/categories/bakery",
    totalItems: 0,
    lowStockItems: 0
  },
  {
    id: '12',
    name: "Beverages",
    icon: "🥤",
    route: "/categories/beverages",
    totalItems: 0,
    lowStockItems: 0
  },
  {
    id: '13',
    name: "Frozen Foods",
    icon: "❄️",
    route: "/categories/frozen-foods",
    totalItems: 0,
    lowStockItems: 0
  }
];

export const initialProducts: Record<string, Product[]> = {
  'womens-clothing': [],
  'mens-clothing': [],
  'electronics': [],
  'home-kitchen': [],
  'beauty': [],
  'toys': [],
  'jewelry': [],
  'sports': [],
  'fresh-produce': [],
  'dairy-eggs': [],
  'bakery': [],
  'beverages': [],
  'frozen-foods': []
};

const mockData = {
  categories,
  initialProducts,
};

export default mockData; 