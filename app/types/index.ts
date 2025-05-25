export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stockQuantity: number;
  lowStockThreshold: number;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  route: string;
  totalItems: number;
  lowStockItems: number;
}

export interface Sale {
  id: string;
  productId: string;
  quantity: number;
  price: number;
  date: string;
  customerName: string;
}

