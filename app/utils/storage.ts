import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product, Category } from '../types';

const STORAGE_KEYS = {
  PRODUCTS: '@products',
  CATEGORIES: '@categories'
} as const;

const storage = {
  // Save products for a specific category
  saveProducts: async (categoryId: string, products: Product[]) => {
    try {
      const key = `${STORAGE_KEYS.PRODUCTS}_${categoryId}`;
      await AsyncStorage.setItem(key, JSON.stringify(products));
      return true;
    } catch (error) {
      return false;
    }
  },

  // Get products for a specific category
  getProducts: async (categoryId: string): Promise<Product[]> => {
    try {
      const key = `${STORAGE_KEYS.PRODUCTS}_${categoryId}`;
      const data = await AsyncStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      return [];
    }
  },

  // Save categories data
  saveCategories: async (categories: Category[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
      return true;
    } catch (error) {
      return false;
    }
  },

  // Get categories data
  getCategories: async (): Promise<Category[] | null> => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.CATEGORIES);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      return null;
    }
  },

  // Clear all inventory data
  clearAll: async () => {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.PRODUCTS,
        STORAGE_KEYS.CATEGORIES,
      ]);
      return true;
    } catch (error) {
      return false;
    }
  }
};

export { storage };
