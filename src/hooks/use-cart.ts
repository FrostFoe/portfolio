'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, PricingOption } from '@/lib/products';
import { useToast } from './use-toast';

export type CartItem = {
  product: Pick<Product, 'id' | 'title' | 'imageSrc' | 'imageHint'>;
  selectedOption: PricingOption;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addToCart: (product: Product, selectedOption: PricingOption) => void;
  removeFromCart: (productId: string, optionName: string) => void;
  updateQuantity: (productId: string, optionName: string, quantity: number) => void;
  clearCart: () => void;
  totalPrice: number;
};

const CartContext = createContext<CartState | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      setItems([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [items]);

  const addToCart = (product: Product, selectedOption: PricingOption) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.selectedOption.name === selectedOption.name
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += 1;
        return newItems;
      } else {
        return [
          ...prevItems,
          {
            product: { id: product.id, title: product.title, imageSrc: product.imageSrc, imageHint: product.imageHint },
            selectedOption,
            quantity: 1,
          },
        ];
      }
    });
    toast({
      title: "সফল!",
      description: `${product.title} (${selectedOption.name}) কার্টে যোগ করা হয়েছে।`,
    });
  };

  const removeFromCart = (productId: string, optionName: string) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.product.id === productId && item.selectedOption.name === optionName)
      )
    );
  };

  const updateQuantity = (productId: string, optionName: string, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.product.id === productId && item.selectedOption.name === optionName) {
          return { ...item, quantity: Math.max(0, quantity) };
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };
  
  const clearCart = () => {
    setItems([]);
  };

  const totalPrice = items.reduce((total, item) => {
    const priceString = item.selectedOption?.price || '0';
    const price = parseFloat(priceString.replace(/[^\d.]/g, ''));
    return total + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  return React.createElement(
    CartContext.Provider,
    {
      value: { items, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice },
    },
    children
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
