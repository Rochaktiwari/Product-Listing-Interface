import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>NextGen Store</h1>
          <p className="subtitle">
            Experience the future of hardware with our curated selection of high-performance tech.
          </p>
        </header>
        
        <main>
          <ProductList />
        </main>


      </div>
    </div>
  );
}

export default App;
