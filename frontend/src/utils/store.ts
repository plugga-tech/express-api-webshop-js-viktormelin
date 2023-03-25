import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { Category, Product, User } from '../types/typings';
import { atom } from 'jotai';

const userAtom = atom(localStorage.getItem('user') ?? null);
export const userAtomPersistance = atom(
  (get) => get(userAtom),
  (get, set, newUser) => {
    set(userAtom, JSON.stringify(newUser));
    localStorage.setItem('user', JSON.stringify(newUser));
  }
);

const cartAtom = atom(localStorage.getItem('cart') ?? null);
export const cartAtomPersistance = atom(
  (get) => get(cartAtom),
  (get, set, newCart) => {
    set(cartAtom, JSON.stringify(newCart));
    localStorage.setItem('cart', JSON.stringify(newCart));
  }
);

// export const userAtom = atomWithStorage<User | null>('user', null);

export const Products: Product[] = [
  {
    _id: '641f217c577d81da61df0425',
    name: 'Produkt 1',
    description: 'Produkt 1, beskrivning',
    price: 100,
    lager: 20,
    category: '641f21af818b28e52286e821',
  },
  {
    _id: '641f22e689db53c35617088d',
    name: 'Produkt 2',
    description: 'Produkt 2, beskrivning',
    price: 100,
    lager: 20,
    category: '641f21af818b28e52286e821',
  },
  {
    _id: '641f22ee68ae8c75064db07d',
    name: 'Produkt 3',
    description: 'Produkt 3, beskrivning',
    price: 100,
    lager: 20,
    category: '641f21af818b28e52286e821',
  },
  {
    _id: '641f22f1e8df8a025fd92ede',
    name: 'Produkt 4',
    description: 'Produkt 4, beskrivning',
    price: 100,
    lager: 20,
    category: '641f21c5a73bbe430b713df2',
  },
  {
    _id: '641f22f45b48857b16b0c80d',
    name: 'Produkt 5',
    description: 'Produkt 5, beskrivning',
    price: 100,
    lager: 20,
    category: '641f21c5a73bbe430b713df2',
  },
  {
    _id: '641f22f6c74ebe3b62e0dce2',
    name: 'Produkt 6',
    description: 'Produkt 6, beskrivning',
    price: 100,
    lager: 20,
    category: '641f21c5a73bbe430b713df2',
  },
  {
    _id: '641f22fa788004a46c77d043',
    name: 'Produkt 7',
    description: 'Produkt 7, beskrivning',
    price: 100,
    lager: 20,
    category: '641f21c8db79aed41893bcd1',
  },
  {
    _id: '641f22fdc1c3b4ec8885b346',
    name: 'Produkt 8',
    description: 'Produkt 8, beskrivning',
    price: 100,
    lager: 20,
    category: '641f21c8db79aed41893bcd1',
  },
  {
    _id: '641f22ff18faaa7a0df585a9',
    name: 'Produkt 9',
    description: 'Produkt 9, beskrivning',
    price: 100,
    lager: 20,
    category: '641f21c8db79aed41893bcd1',
  },
  {
    _id: '641f2302c1bb2bb4b722dfb1',
    name: 'Produkt 10',
    description: 'Produkt 10, beskrivning',
    price: 100,
    lager: 20,
    category: '641f21c8db79aed41893bcd1',
  },
];

export const Categories: Category[] = [
  {
    _id: '641f21af818b28e52286e821',
    name: 'Kategori 1',
  },
  {
    _id: '641f21c5a73bbe430b713df2',
    name: 'Kategori 2',
  },
  {
    _id: '641f21c8db79aed41893bcd1',
    name: 'Kategori 3',
  },
];
