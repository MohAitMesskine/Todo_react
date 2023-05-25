import './App.css';

import React, { useState } from 'react';

  
  export default function Header() {
    return (
        <header className="bg-gray-800 py-4">
        <nav className="container mx-auto px-4 flex items-center justify-between">
          <a className="text-white text-2xl font-bold" href="/">My Website</a>
          <ul className="flex space-x-4">
            <li><a className="text-white" href="/">Home</a></li>
            <li><a className="text-white" href="/about">About</a></li>
            <li><a className="text-white" href="/services">Services</a></li>
            <li><a className="text-white" href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
   
      );
    };