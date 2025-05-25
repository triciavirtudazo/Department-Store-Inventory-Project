import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import mockData from './data/mockData';
import { storage } from './utils/storage';
import { Product } from './types';

export default function HomePage() {
  const router = useRouter();
  const [totalItems, setTotalItems] = useState(0);
  const [lowStockItems, setLowStockItems] = useState(0);
  const [categoryCounts, setCategoryCounts] = useState<Record<string, { total: number; lowStock: number }>>({});

  const loadInventoryCounts = async () => {
    let total = 0;
    let lowStock = 0;
    const counts: Record<string, { total: number; lowStock: number }> = {};

    for (const category of mockData.categories) {
      const categoryId = category.route.split('/').pop() || '';
      const products = await storage.getProducts(categoryId);

      const categoryTotal = products.length;
      const categoryLowStock = products.filter((product: Product) =>
        product.stockQuantity <= product.lowStockThreshold
      ).length;

      counts[categoryId] = {
        total: categoryTotal,
        lowStock: categoryLowStock,
      };

      total += categoryTotal;
      lowStock += categoryLowStock;
    }

    setCategoryCounts(counts);
    setTotalItems(total);
    setLowStockItems(lowStock);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadInventoryCounts();
    }, [])
  );

  const handleCategoryPress = (route: string) => {
    router.push(route);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inventory Management</Text>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Ionicons name="cube-outline" size={24} color="#228be6" />
          <Text style={styles.summaryNumber}>{totalItems}</Text>
          <Text style={styles.summaryLabel}>Total Items</Text>
        </View>
        <View style={styles.summaryCard}>
          <Ionicons name="warning-outline" size={24} color="#f4511e" />
          <Text style={styles.summaryNumber}>{lowStockItems}</Text>
          <Text style={styles.summaryLabel}>Low Stock Items</Text>
        </View>
      </View>

      <ScrollView style={styles.categoriesContainer}>
        <View style={styles.categoriesGrid}>
          {mockData.categories.map((category) => {
            const categoryId = category.route.split('/').pop() || '';
            const counts = categoryCounts[categoryId] || { total: 0, lowStock: 0 };

            return (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryCard}
                onPress={() => handleCategoryPress(category.route)}
              >
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={styles.categoryName}>{category.name}</Text>
                <View style={styles.categoryStats}>
                  <Text style={styles.categoryStat}>Items: {counts.total}</Text>
                  <Text style={[styles.categoryStat, counts.lowStock > 0 && styles.lowStockText]}>
                    Low: {counts.lowStock}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  header: {
    padding: 16,
    backgroundColor: 'blue',
    ...Platform.select({
      ios: {
        shadowColor: 'blue',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  summaryContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: 'skyblue',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  summaryNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  categoriesContainer: {
    flex: 1,
    padding: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  categoryCard: {
    width: '47%',
    backgroundColor: 'lightblue',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  categoryStats: {
    width: '100%',
    alignItems: 'center',
  },
  categoryStat: {
    fontSize: 12,
    color: '#666',
    marginVertical: 2,
  },
  lowStockText: {
    color: '#f4511e',
    fontWeight: '500',
  },
});
