export type Category = {
  id: number;
  name: string;
  icon: string;
  route: string;
  totalItems: number;
  lowStockItems: number;
};

export type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  stockQuantity: number;
  categoryId: string;
};

export type Sale = {
  id: string;
  productId: string;
  quantity: number;
  totalAmount: number;
  date: Date;
}; 