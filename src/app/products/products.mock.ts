export const productsList: Product[] = [
  { 
    id: 1, 
    name: 'Soap', 
    price: 10, 
    description: ''
  },
  {
    id: 2,
    name: 'Detergent',
    price: 2,
    description: 'Powerful detergent for cleaning',
  },
  {
    id: 3,
    name: 'Clorox',
    price: 5,
    description: 'Effective bleach for disinfecting',
  },
  {
    id: 4,
    name: 'Shampoo',
    price: 8,
    description: 'Moisturizing shampoo for all hair types',
  },
  {
    id: 5,
    name: 'Toothpaste',
    price: 3,
    description: 'Fluoride toothpaste for strong teeth',
  },
  {
    id: 6,
    name: 'Hand Sanitizer',
    price: 6,
    description: 'Kills 99.9% of germs',
  },
  { 
    id: 7, 
    name: 'Lotion', 
    price: 12, 
    description: 'Hydrating body lotion' },
  {
    id: 8,
    name: 'Conditioner',
    price: 9,
    description: 'Smooths and softens hair',
  },
  {
    id: 9,
    name: 'Glass Cleaner',
    price: 4,
    description: 'Streak-free shine for windows and mirrors',
  },
  {
    id: 10,
    name: 'Dish Soap',
    price: 7,
    description: 'Cuts grease and leaves dishes sparkling',
  },
];

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;      
}