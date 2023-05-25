import './App.css';

import React, { useState } from 'react';
const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
  export default function ShoppingList() {
    return (
       
        <footer className="bg-gray-800 text-white py-4 absolute inset-x-0 bottom-0 ">
          <div className="container mx-auto px-4 bottom-0 left-0">
            <p className="text-center ">&copy; Ait Messkine</p>
          </div>
        </footer>
        
      );
    };
  
  